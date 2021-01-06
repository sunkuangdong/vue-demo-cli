// let data1 = {}

// Object.defineProperty(data1, "n", {
//     value: 0
// })
// console.log(data1.n)

// let obj2 = {}
// obj2._n = 0
// Object.defineProperty(obj2, "n", {
//     get() {
//         return this._n
//     },
//     set(value) {
//         if (value < 0) return
//         this._n = value
//     }
// })

// console.log(`需求二：${obj2.n}`)
// obj2.n = -1
// console.log(`需求二：${obj2.n} 设置为 -1失败`)
// obj2.n = 1
// console.log(`需求二：${obj2.n} 设置为 1 成功`)

let obj3 = proxy({
    data: {
        n: -1
    }
})

function proxy({
    data
}) {
    let value = data.n
    Object.defineProperty(data, "n", {
        get() {
            if (value < 0) return 0;
            return value
        },
        set(newValue) {
            if (newValue < 0) return
            value = newValue
        }
    })

    const obj = {}
    Object.defineProperty(obj, "n", {
        get() {
            return data.n
        },
        set(value) {
            data.n = value
        }
    })
    return obj;
}

console.log(`需求三：${obj3.n}`)
obj3.n = -1
console.log(`需求三：${obj3.n}，设置为 -1失败`)
obj3.n = 1
console.log(`需求三：${obj3.n}，设置为 1 成功`)