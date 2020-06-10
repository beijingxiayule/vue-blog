(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{178:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"vue面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue面试题"}},[e._v("#")]),e._v(" vue面试题")]),e._v(" "),a("h4",{attrs:{id:"_1、介绍一下vue的生命周期（钩子函数）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍一下vue的生命周期（钩子函数）"}},[e._v("#")]),e._v(" 1、介绍一下Vue的生命周期（钩子函数）")]),e._v(" "),a("pre",[a("code",[e._v("beforeCreate（创建前） 在数据观测和初始化事件还未开始\n\ncreated（创建后） 完成数据观测，属性和方法的运算，初始化事件，$el属性还没有显示出来\n\nbeforeMount（载入前） 在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。注意此时还没有挂载html到页面上。\n\nmounted（载入后） 在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html页面中。此过程中进行ajax交互。\n\nbeforeUpdate（更新前） 在数据更新之前调用，发生在虚拟DOM重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。\n\nupdated（更新后） 在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。\n\nbeforeDestroy（销毁前） 在实例销毁之前调用。实例仍然完全可用。\n\ndestroyed（销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。\n\nactivated（keep-alive 组件激活时调用）\n\ndeactivated（keep-alive 组件停用时调用。）\n\nerrorCaptured：当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。\n")])]),e._v(" "),a("h4",{attrs:{id:"_2、第一次页面加载会触发哪几个钩子？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、第一次页面加载会触发哪几个钩子？"}},[e._v("#")]),e._v(" 2、第一次页面加载会触发哪几个钩子？")]),e._v(" "),a("pre",[a("code",[e._v("触发beforeCreate, created, beforeMount, mounted ，并在mounted的时候DOM渲染完成\n")])]),e._v(" "),a("h4",{attrs:{id:"_3、v-if-和-v-show-有什么区别？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、v-if-和-v-show-有什么区别？"}},[e._v("#")]),e._v(" 3、v-if 和 v-show 有什么区别？")]),e._v(" "),a("pre",[a("code",[e._v("实现方式： v-if是根据后面数据的真假值判断直接从Dom树上删除或重建元素节点。  v-show只是在修改元素的css样式，也就是display的属性值，元素始终在Dom树上。\n\n编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；\n\n编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译； v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留；\n\n性能消耗：v-if有更高的切换消耗，不适合做频繁的切换；v-show有更高的初始渲染消耗，适合做频繁的切换；\n")])]),e._v(" "),a("h4",{attrs:{id:"_4、为什么vue组件中data必须是一个函数？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、为什么vue组件中data必须是一个函数？"}},[e._v("#")]),e._v(" 4、为什么vue组件中data必须是一个函数？")]),e._v(" "),a("pre",[a("code",[e._v("对象为引用类型，当重用组件时，由于数据对象都指向同一个data对象，当在一个组件中修改data时，其他重用的组件中的data会同时被修改；当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立的拷贝，这样各个实例中的data不会相互影响，是独立的。\n")])]),e._v(" "),a("h4",{attrs:{id:"_5、-nexttick是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、-nexttick是什么？"}},[e._v("#")]),e._v(" 5、$nextTick是什么？")]),e._v(" "),a("pre",[a("code",[e._v("vue实现响应式并不是数据发生变化后dom立即变化，而是按照一定的策略来进行dom更新。\n$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM\n")])]),e._v(" "),a("h4",{attrs:{id:"_6、vue中的-ref-是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、vue中的-ref-是什么？"}},[e._v("#")]),e._v(" 6、vue中的 ref 是什么？")]),e._v(" "),a("pre",[a("code",[e._v("ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例。\n")])]),e._v(" "),a("h4",{attrs:{id:"_7、-route-和-router-的区别是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、-route-和-router-的区别是什么？"}},[e._v("#")]),e._v(" 7、$route 和 $router 的区别是什么？")]),e._v(" "),a("pre",[a("code",[e._v("route是“路由信息对象”，包括path,params,hash,query,fullPath,matched,name等路由信息参数。\nrouter是“路由实例对象”，包括了路由的跳转方法(push、replace)，钩子函数等。\n")])]),e._v(" "),a("h4",{attrs:{id:"_8、什么是js的冒泡？vue中如何阻止冒泡事件？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、什么是js的冒泡？vue中如何阻止冒泡事件？"}},[e._v("#")]),e._v(" 8、什么是js的冒泡？Vue中如何阻止冒泡事件？")]),e._v(" "),a("pre",[a("code",[e._v('js冒泡概念：当父元素内多级子元素绑定了同一个事件，js会依次从内往外或者从外往内（？）执行每个元素的该事件，从而引发冒泡\njs解决冒泡：event.stopPropagation() ，IE则是使用 event.cancelBubble = true\nvue解决冒泡： 事件.stop,例如：@click.stop="" ,@mouseover.stop=""\n')])]),e._v(" "),a("h4",{attrs:{id:"_9、说一下v-cloak的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、说一下v-cloak的作用"}},[e._v("#")]),e._v(" 9、说一下v-cloak的作用")]),e._v(" "),a("pre",[a("code",[e._v("这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。\n")])])])}],!1,null,null,null);t.default=s.exports}}]);