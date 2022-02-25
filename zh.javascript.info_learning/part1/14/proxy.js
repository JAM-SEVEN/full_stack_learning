/*
 * @Author: JAM-SEVEN
 * @Date: 2021-08-25 14:38:18
 * @LastEditTime: 2022-02-23 16:19:11
 * @Description: TO DO
 */
let user = {
    name: 'John',
    _password: '888'
}

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith("_"))
        {
            throw new Error("Access denied")
        }
        let value = target[prop]
        return (typeof value === "function" ? value.bind(target) : value)
    },
    set(target, prop, value) {
        if (prop.startsWith("_"))
        {
            throw new Error("Access denied")
        } else
        {
            target[prop] = value
            return true
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith("_"))
        {
            throw new Error("Access denied")
        } else
        {
            delete target[prop]
            return true
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith("_"))
    }
})

try{
    console.log(user._password)
} catch (error) { console.log(error.message) }
 
try
{
    user._password = "test"
} catch (error) { console.log(error.message) }

try
{
    delete user._password
} catch (error) { console.log(error.message) }

for (let key in user)
{
    console.log(key)
}