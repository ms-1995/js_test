##实现select菜单自定义样式的一点思路


最近听了几个大大的知乎live深受启发，今天开始本宝宝要写技术日记了。希望可以增加自己的记忆，也希望可以给其他和我一样的初学者提供一个思路。

因为浏览器对select元素的限制，select元素显示的效果往往不尽人意，想要达到想要的效果就只能用其他标签模拟出想要的select效果了。如何使模拟出来的元素也具有select的属性值呢，就需要js来帮忙啦。
####一、获取元素
* 根据class或者id获取到要模拟的select标签
* 取得select标签中option的值，以及其他需要的属性值
* 隐藏select元素

####二、创建模拟的元素
* 设计将用于模拟的元素结构，如

        <div>
            <span></span>//select标签selected的值
            <ul>
                <li></li>
                <li></li>//select标签每项option的值
                <li></li>
            </ul>
        </div>

* 将获取到的option值字符串拼接在元素的内容区。ps：当然也可以先插入结构再直接赋值。

####三、模拟的元素添加到节点中
* 将拼接好的字符串插入到select标签前

        select.parentNode.insertBefore(div,select);

* 将ul标签设置为隐藏

####四、绑定事件
* 给span标签添加鼠标点击事件，当鼠标点击span时，显示ul标签,运用阻止冒泡使点击span标签时不会触发点击document事件
* 给整个页面(document)添加点击事件，当点击时，隐藏ul标签
* 给li标签添加鼠标点击事件，当鼠标点击li时，将li的值赋给span标签，并给select标签中相应option标签添加selected(当前选中属性)。


#####为div和里面的标签添加想要的样式，这样就实现了一个自定义的select元素，并且表单提交时依然可以直接获取
