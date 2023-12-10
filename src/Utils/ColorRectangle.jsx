import * as d3 from 'd3';

export const ColorRectangle = (index, color, speed) => {
    return new Promise(async resolve => {
      d3.select('rect[index="' + index + '"]')
        .attr('fill', `${color}`)
      setTimeout(() => {
        resolve()
      }, speed * 50)
    })
}