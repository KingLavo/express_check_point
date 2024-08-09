const date = new Date()

let day = date.getDay() 
let min = date.getMinutes()
let time =  date.getHours()
let TimeOut = parseFloat(`${time}.${min}`)
 
//checker middleWare
module.exports = dayAndTimeMiddle = ( req, res, next)=>{
    if( (day > 0 && day <= 5) && (TimeOut > 8.59 && TimeOut <= 17.00)){
        next()
        return
    }else{
        res.render('timeOut', {title: "TimeOut"})
    }
}