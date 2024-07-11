function getTotalValue(a,b){
    Java.perform(function() {

        Java.choose("com.example.secondnoactivity.SecondNoActivity",{
            onMatch: function(instance) {
                var result = instance.add(a,b)
                console.log("result is:", result)
            },
            // onComplete:function(){
            //     console.log("Secret Complete_two")
            // }
        })
    })
}
rpc.exports = {
    add : getTotalValue
};