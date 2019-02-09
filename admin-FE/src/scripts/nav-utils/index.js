const NavUtils = {
    //定义里面的方法

    /*  rander() {
         window.addEventListener('load', function() {
             NavUtils.setTitle()
         }, false)

         window.addEventListener('hashchange', function() {
             NavUtils.setTitle() //监听地址栏的变化的
         }, false)
     }, */
    /* rander(){
       window.addEventListener('load',this.run.bind(this),false)
       window.addEventListener('hashchange',function(){
           NavUtils.setTitle()
       },false)
    }, */
    rander() {
        window.addEventListener('load', this.run.bind(this), false)
        window.addEventListener('hashchange', this.run.bind(this), false)
    },



    run() {
        this.setTitle()
        this.setNav()
    }, //run.bind(this)



    setTitle() {
        //处理路由切换的头部
        const hash = location.hash.slice(1) //#/index

        let match = { //路由表
                '/index': ['主页', '欢迎信息'],
                '/position': ['职位管理', '职位列表'],
                '/position/add': ['发布信息', '信息列表']
            }
            //dom操作
        const $h1 = $('section.content-header h1')
        $h1.find('span').html(match[hash][0])
        $h1.find('small').html(match[hash][1])

        const $breadcrumb = $('#app-home-title')
        const $breadcrumbIcon = $('#app-home-title-icon')

        $breadcrumb.html(match[hash][0])
        $breadcrumbIcon.html(match[hash][1])

    },
    setNav() { //导航激活状态
        const hash = location.hash.slice(1)

        // const $a = (`ul.sidebar-menu a[href=#${hash}]`)
        const $a = $(`ul.sidebar-menu a[href='#${hash}']`) //通过属性精确的定位到a

        // $a.parent().addClass('active').siblings().removeClass('active')
        $a.parent().addClass('active').siblings().removeClass('active')
    }
}


module.exports = NavUtils