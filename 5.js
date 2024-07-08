function CallSecretFunc(){
    console.log("loaded success")
    Java.perform(function(){
        console.log("inside java perform function")
        Java.choose("com.example.secondnoactivity.SecondNoActivity",{
            onMatch: function(instance) {
                instance.secret()
            },
            onComplete:function(){
                console.log("Secret Complete_two")
            }
        })

    })
}
function getTotalValue(){
    Java.perform(function() {
        var Mainactivity = Java.use("com.example.secondnoactivity.SecondNoActivity")

        Java.choose("com.example.secondnoactivity.SecondNoActivity",{
            onMatch: function(instance) {
                instance.secret()
                console.log("value is:", instance.total.value)
            },
            onComplete:function(){
                console.log("Secret Complete_two")
            }
        })
    })
}
rpc.exports = {
    callsecretfunc : CallSecretFunc,
    gettotalvalue : getTotalValue
};
// setImmediate(getTotalValue)