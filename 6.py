import frida, sys

device = frida.get_usb_device()
process = device.attach("SecondNoActivity")

with open('6.js') as f:
    jscode = f.read()

script = process.create_script(jscode)
script.load()
for i in range(1,2):
    for j in range(20,21):
        script.exports_sync.add(str(i),str(j))
   