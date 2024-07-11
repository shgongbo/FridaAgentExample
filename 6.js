function CallAdd(a, b){
    console.log("1" * 100)
    Java.perform(function(){
        console.log("2")
        var MainActivity = Java.use("com.example.secondnoactivity.SecondNoActivity");
        console.log(3)
        var JavaString = Java.use('java.lang.String');
        console.log(4)
        var Result = MainActivity.add(JavaString.$new(a), JavaString.$new(b));
        console.log(5)
        console.log(a, "+", b, "=", Result.toString());})
    
}

rpc.exports = {
    add: CallAdd,
};