import SMERouter from 'sme-router'

const router = new SMERouter('router-view')
    //引入模板
const homeTpl = require('../views/home.html')
const positionTpl = require('../views/position.html')
const positionAddTpl = require('../views/position-add.html')

router.route('/index', (req, res, next) => {
    res.render(homeTpl)
})


router.route('/position', (req, res, next) => {
    res.render(
        positionTpl
    )
})

router.route('/position/add', (req, res, next) => {
    res.render(
        positionAddTpl
    )
})


router.route('*', (req, res, next) => {
        res.redirect('/index')
    })
    /*
                               _ooOoo_
                              o8888888o
                              88" . "88
                              (| -_- |)
                              O\  =  /O
                           ____/`---'\____
                         .'  \\|     |//  `.
                        /  \\|||  :  |||//  \
                       /  _||||| -:- |||||-  \
                       |   | \\\  -  /// |   |
                       | \_|  ''\---/''  |   |
                       \  .-\__  `-`  ___/-. /
                     ___`. .'  /--.--\  `. . __
                  ."" '<  `.___\_<|>_/___.'  >'"".
                 | | :  `- \`.;`\ _ /`;.`/ - ` : | |
                 \  \ `-.   \_ __\ /__ _/   .-` /  /
            ======`-.____`-.___\_____/___.-`____.-'======
                               `=---='
            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                     佛祖保佑       永无BUG
            */