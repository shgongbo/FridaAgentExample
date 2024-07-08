function main(){
    console.log("loaded success")
    Java.perform(function(){
        console.log("inside java perform function")
        var Mainactivity = Java.choose("com.example.secondnoactivity.SecondNoActivity",{
            onMatch: function(instance) {
                instance.secret()
            },
            onComplete:function(){
                console.log("Secret Complete_two")
            }
        })

    })
}
setImmediate(main)