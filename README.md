# MiniVariables16
A fork & expansion of [Mini Variables](https://yousurname.itch.io/mini-variables-plugin-for-gb-studio)

### GB Studio compatibility
| 3.1   | :white_check_mark: |
| ----- | ------------------ |
| 4.1.3 | :white_check_mark: |

GB Studio only truly supports one type of variable, a signed 16-bit integer. While this is *fine* for most small projects, there are a limited amount available and it can quickly become wasteful. Breaking a variable into single-bit flags is also supported, but these two options alone do not in my opinion cover enough use cases. With this plugin you can break each variable into smallers sets of 2/4/8-bit variables to save on space. Special thanks to **Yousurname** for the original plugin that I based this off of!

## How to install
Add the `plugins` folder into your project. 

## Plugin Usage
There are new options available in the **Variables** section of the **Add Event** menu for each new type of bit value.

### Set 2-Bit Values
![2-bit](/images/2bit.PNG)

You can set up to 7 values ranging from 0-3 inside a single variable.

### Set 4-Bit Values
![4-bit](/images/4bit.PNG)

You can set up to 4 values ranging from 0-7 inside a single variable.

### Set 8-Bit Values
![8-bit](/images/8bit.PNG)

You can set up to 2 values ranging from 0-255 inside a single variable; due to some limitations, the sum of both values can at most be **382**, otherwise a rollover bug will occur. For example, if value 1 is set to 255, value 2 can only go up to 127.

### Grab n-Bit Value

![Grab](/images/Grab.PNG)

After setting the values inside a variable, you can use a corresponding **Grab** event available for each type. This allows you to copy the data into a standard variable which you can then use inside any event as normal. For example, if you want the first 8-bit value stored inside a variable, you would use **Grab 8-Bit Value** and select **8-Bit Value 1**.
