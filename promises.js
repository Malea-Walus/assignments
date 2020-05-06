const backend = (x) => {
    const x = new Promise((resolve, reject) => {
        if (x % 2 === 0) {
            resolve('number is even')
        } else if (x % 2 === 1)
            reject('number is odd')
    })
    return x
}

const builtInFuncs = (brandnewpromise) => {
    const brandnewpromise = backend(4)
    brandnewpromise.then((success) => {
        console.log(success)
    }).catch((fail) => {
        console.log (fail)
    })
}

const asyncAwait = async (asyncpromise) => {
    const asyncpromise = backend(4)
    try {
        const success = await asyncpromise
        console.log (success)
    } catch {
        (fail)
        console.log (fail)
    }
}

