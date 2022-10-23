// 从 itemElement 中抽离所有的imgElement
export const getImgElements = (itemElements) => {
  const imgElements = []
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName('img'))
  })
  return imgElements
}

// 生成所有的图片链接数组
export const getAllImg = (imgElements) => {
  return imgElements.map((imgElement) => {
    return imgElement.src
  })
}

// 监听图片数组加载完成（promise）
export const onComplateImgs = imgs => {
  // promise集合
  const promiseAll = []
  // 循环imgs，构建promiseAll
  imgs.forEach((img, index) => {
    promiseAll[index] = new Promise((res, rej) => {
      // 处理img的加载情况
      const imageObj = new Image()
      imageObj.src = img
      imageObj.onload = () => {
        res({
          img,
          index
        })
      }
    })
  })

  return Promise.all(promiseAll)
}

// 返回列高对象中的最小高度
export const getMinHeight = columnHeightObj => {
  const columnHeightArr = Object.values(columnHeightObj)
  return Math.min(...columnHeightArr)
}

// 返回列高对象中的最大高度
export const getMaxHeight = columnHeightObj => {
  const columnHeightArr = Object.values(columnHeightObj)
  return Math.max(...columnHeightArr)
}



// 返回列高对象中最小高度所在列
export const getMinHeightColumn = columnHeightObj => {
  // 拿到最小高度
  const minHeight = getMinHeight(columnHeightObj)
  return Object.keys(columnHeightObj).find(key => columnHeightObj[key] === minHeight)
}
