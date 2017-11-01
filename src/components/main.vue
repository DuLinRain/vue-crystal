<template>
    <div :id ="id">
        <a v-for="item in data" :href="prefix + item.href">{{item.name}}</a>
    </div>
</template>
<script type="text/babel">
  let timerId
  export default {
    name: 'TegRotate',
    props: {
      id: {
        type: String,
        default: 'rotate',
        required: false
      },
      data: {
        type: Array,
        default: function () {
            return []
        },
        required: true
      },
      prefix: {
        type: String,
        default: '',
        required: false
      },
      radius: {
        type: Number,
        default: 300,
        required: true
      },
      duration: {
        type: Number,
        default: Infinity,
        required: false
      },
      speed: {
        type: Number,
        default: 30,
        required: false
      },
      angle: {
        type: Array,
        default: function () {
            return [1, 1, 1]
        },
        required: false
      },
      radius: {
        type: Number,
        default: 300,
        required: true
      },
      distribution: {
        type: Boolean,
        default: true,
        required: false
      }
    },
    data() {
      return {
        visible: true,
        dx: null,
        dy: null,
        dz: null,
        dtr: Math.PI/180,
        mcList: [],
        howElliptical: 1,
        oDiv: null,
        oA: [],
        clientX: 0,
        clientY: 0
      };
    },
    created () {
        this.initialXYZ()
    },
    mounted () {
        let _ = this
        _.initRotate()
    },
    methods: {
        sineCosine (a, b, c) {
            let _ = this
            return {
                sa: Math.sin(a * _.dtr),
                ca: Math.cos(a * _.dtr),
                sb: Math.sin(b * _.dtr),
                cb: Math.cos(b * _.dtr),
                sc: Math.sin(c * _.dtr),
                cc: Math.cos(c * _.dtr)
            }
        },
        update () {
            let _ = this
            // console.log('xx')
            let {sa, ca, sb, cb, sc, cc} = _.sineCosine(..._.normalizedXYZ())
            for(let j = 0; j < _.mcList.length; j++)
            {
                //绕x轴旋转
                let rx1 = _.mcList[j].cx
                let ry1 = _.mcList[j].cy * ca + _.mcList[j].cz * (-sa)
                let rz1 = _.mcList[j].cy * sa + _.mcList[j].cz * ca
                //绕y轴旋转
                let rx2 = rx1 * cb + rz1 * sb
                let ry2 = ry1
                let rz2 = rx1 * (-sb) + rz1 * cb
                //绕z轴旋转
                let rx3 = rx2 * cc + ry2 * (-sc)
                let ry3 = rx2 * sc + ry2 * cc
                let rz3 = rz2
                //计算新的位置
                _.mcList[j].cx = rx3
                _.mcList[j].cy = ry3
                _.mcList[j].cz = rz3
                let d = 2 * _.radius
                let per = d / (d + rz3)

                _.mcList[j].x = (_.howElliptical * rx3 * per)-(_.howElliptical*2);
                _.mcList[j].y = ry3 * per;
                _.mcList[j].scale = per;
                _.mcList[j].alpha = per;

                _.mcList[j].alpha = (_.mcList[j].alpha - 0.6) * (10 / 6);
            }
            _.doPosition()
        },
        initialXYZ () {
            let _ = this
            _.dx = _.angle[0]
            _.dy = _.angle[1]
            _.dz = _.angle[2]
        },
        normalizedXYZ () {
            let _ = this
            let r = Math.sqrt(_.dx ** 2 + _.dy ** 2 + _.dz ** 2)
            return [_.dx / r, _.dy / r, _.dz / r]
        },
        positionAll () {
            let _ = this
            let phi = 0;//phi角，位置与z轴夹角
            let theta = 0;//theta角，位置在x0y平面投影与x轴的夹角
            let max = _.mcList.length;//a标签个数
            let aTmp = [];//临时存储a标签的dom
            let oFragment = document.createDocumentFragment();//创建dom片段

            //相当于拷贝了一份
            for(let i=0;i<_.aA.length;i++)
            {
                aTmp.push(_.aA[i]);
            }

            aTmp.sort//自定义排序，根据随机数来排
            (
                function ()
                {
                    return Math.random() < 0.5 ? 1 : -1
                }
            )
            //将排序完的加入到dom片段中
            for(let i=0;i<aTmp.length;i++)
            {
                oFragment.appendChild(aTmp[i]);
            }
            //把打乱顺序后的a标签插入到父亲dom中，为什么要插入呢？？
            _.oDiv.appendChild(oFragment);
            //遍历,设定在x,y,z轴的投影以及绝对定位的位置
            for( var i=1; i<max+1; i++){
                //根据dom在数组中的位置计算phi角度和theta角度，通过反余弦计算的
                //有点正态分布/均匀分布的意思
                // console.log(_.distribution)
                if( _.distribution )
                {
                    phi = Math.acos(-1+(2*i-1)/max);//[0, pi]
                    theta = Math.sqrt(max*Math.PI)*phi;//theta角固定[0, 2pi]
                }
                else//否则随机
                {
                    phi = Math.random()*(Math.PI);//phi角随机[0, pi]
                    theta = Math.random()*(2*Math.PI);//theta角随机[0, 2pi]
                }
                //计算球面上某个a标签在x/y/z轴上的投影坐标，
                //致此,mcList的每个对象元素具有了标签的宽、高以及xyz位置信息
                _.mcList[i-1].cx = _.radius * Math.cos(theta)*Math.sin(phi);//在x轴的投影
                _.mcList[i-1].cy = _.radius * Math.sin(theta)*Math.sin(phi);//在y轴的投影
                _.mcList[i-1].cz = _.radius * Math.cos(phi);//在z轴的投影
                //设定a标签dom的样式，实际就是从三维球面转换成二维平面，实际上z坐标信息就没有用了
                //oDiv.offsetWidth/2是二维球面所占据的大小
                _.aA[i-1].style.left=_.mcList[i-1].cx+_.oDiv.offsetWidth/2-_.mcList[i-1].offsetWidth/2+'px';
                _.aA[i-1].style.top=_.mcList[i-1].cy+_.oDiv.offsetHeight/2-_.mcList[i-1].offsetHeight/2+'px';
            }
        },
        doPosition () {
            let _ = this
            var l=_.oDiv.offsetWidth/2;
            var t=_.oDiv.offsetHeight/2;
            for(var i=0;i<_.mcList.length;i++)
            {

                _.aA[i].style.left=_.mcList[i].cx+l-_.mcList[i].offsetWidth/2+'px';
                _.aA[i].style.top=_.mcList[i].cy+t-_.mcList[i].offsetHeight/2+'px';
                //设置字体
                _.aA[i].style.fontSize=Math.ceil(12*_.mcList[i].scale/2)+8+'px';
                //透明度
                _.aA[i].style.filter="alpha(opacity="+100*_.mcList[i].alpha+")";
                _.aA[i].style.opacity=_.mcList[i].alpha;
                _.aA[i].style.color=_.mcList[i].color;
                _.aA[i].style.fontFamily = "楷体"
                if (_.aA[i].innerText === '野娜' || _.aA[i].innerText === '58') {
                    _.aA[i].style.left= l - 32 + 'px'
                    _.aA[i].style.top=t - 24 + 'px'
                    _.aA[i].style.fontSize= '48px'
                    _.aA[i].style.filter="alpha(opacity="+100*0.35+")";
                    _.aA[i].style.opacity=0.35;
                    _.aA[i].style.color= 'red'
                }
                // console.log(_.mcList[i])
            }
        },
        initRotate () {
            let _ = this
            _.oDiv=document.getElementById('rotate');
            _.aA=_.oDiv.getElementsByTagName('a');//拿到所有的a标签dom
            //遍历，拿到每个a标签的高度和宽度
            for(let i=0;i<_.aA.length;i++){
                let oTag={};
                oTag.offsetWidth=_.aA[i].offsetWidth
                oTag.offsetHeight=_.aA[i].offsetHeight
                oTag.color = '#' + _.normalizeColor(Math.random() * 255) + _.normalizeColor(Math.random() * 255) + _.normalizeColor(Math.random() * 255)
                // console.log(oTag.color)
                _.mcList.push(oTag)//装的都是dom元素
            }
            //初始化sin, cos
            _.sineCosine(0, 0, 0)
            _.positionAll()
            _.addEvents()
            timerId = setInterval(_.update, 30);
        },
        normalizeColor (number) {
            return Number.parseInt(number).toString(16)
        },
        addEvents () {
            let _ = this
            _.oDiv.onmouseover=function ()
            {
                clearInterval(timerId)
            };
            //鼠标移出时继续旋转
            _.oDiv.onmouseout=function ()
            {
                timerId = setInterval(_.update, 30);
            };
            //鼠标移动时计算角度
            _.oDiv.onmousemove=function (ev)
            {
                var oEvent=window.event || ev;
                let {clientX, clientY} = oEvent
                let da = clientX - _.clientX
                let db = clientY - _.clientY
                if (da === 0 && db === 0) {
                    return
                }
                let dc = Math.sqrt(da **2 + db **2);
                _.dx = db / dc
                _.dy = -da / dc
                _.dz = 0
                // sineCosine(a,b,c)
                _.clientX = clientX
                _.clientY = clientY
            };
        }
    }
  }
</script>
<style>
#rotate {
    width: 700px;
    height: 700px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}
#rotate a {
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-decoration: none;
    font-family:'楷体';
}
</style>