##实现轮播图的小小思路

最近写页面涉及到了轮播图，趁着还没忘，把我的思路记录下来。

1. 定义轮播图的结构
    
        <ul>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul>

2. 然后设置好图片的大小和li的大小，设置ul的大小为一个li的大小并且隐藏超出部分，这样一次就只会显示出来一张图片。

3. 将所有的li的left值设置为-100%，现在ul中显示的就变成了空白。再用js控制想要的顺序，将想显示的图片left值设置成0就可以了。不要忘了将前一个left设成0的li的值再设置回-100%。

4. 这样一个简单的轮播图就完成了，当然也可以在变换时增加一些酷炫的特效，这里就不说了~哈哈 