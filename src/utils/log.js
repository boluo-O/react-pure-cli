window.log = (variableObj) => {
    let _type = typeof(variableObj)

    if (_type === 'object') {
        let variableName = Object.keys(variableObj)[0]
        console.log(variableName, variableObj[variableName])
    } else if (_type === 'string') {
        console.log(variableObj)
    } else {
        console.log('use log need add {} first')
    }
}