import frida, sys

device = frida.get_usb_device()
process = device.attach("SecondNoActivity")

with open('5.js') as f:
    jscode = f.read()

script = process.create_script(jscode)
script.load()
while True:
    number = input("give me number")
    if int(number) == 1:
        script.exports.callsecretfunc()
    elif int(number) == 2:
        script.exports.gettotalvalue()