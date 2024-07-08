function main(){
    console.log("loaded success")
    Java.perform(function(){
        console.log("inside java perform function")
        var Mainactivity = Java.use("com.example.secondnoactivity.SecondNoActivity")
        console.log("定位成功")
        Mainactivity.generateRandomNumber.implementation = function(){
            return 666
        }

    })
}
setImmediate(main)