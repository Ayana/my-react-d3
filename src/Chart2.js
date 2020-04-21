import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const BarChart = (props) => {
	const { data, w, h, color } = props
	const chartRef = useRef()

	useEffect(() => {
		for (let index = 0; index < 5; index++) {
			console.log(index)
		}

		const svg = d3.select(chartRef.current).append('svg').attr('width', w).attr('height', h).style('background', '#fff').style('padding', '20')

		svg
			.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			// .join('circle')
			.attr('r', 10)
			.attr('fill', color)
			.attr('cx', (d, i) => i * 55 + 20)
			.attr('cy', (d, i) => h - 10 * d)

		// svg
		// 	.selectAll('rect')
		// 	.data(data)
		// 	.enter()
		// 	.append('rect')
		// 	.attr('x', (d, i) => i * 65)
		// 	.attr('y', (d, i) => h - 10 * d)
		// 	.attr('width', 50)
		// 	.attr('height', (d, i) => 10 * d)
		// 	.attr('fill', color)
		// drawChart()
	}, [])

	// function drawChart() {
	// 	const accessToRef = d3.select(chartRef.current).append('svg').attr('width', w).attr('height', h).style('background', '#fff').style('padding', '20')

	// 	accessToRef
	// 		.selectAll('rect')
	// 		.data(data)
	// 		.enter()
	// 		.append('rect')
	// 		.attr('x', (d, i) => i * 65)
	// 		.attr('y', (d, i) => h - 10 * d)
	// 		.attr('width', 50)
	// 		.attr('height', (d, i) => 10 * d)
	// 		.attr('fill', color)
	// }

	return <div ref={chartRef}></div>
}

// class BarChart extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.myRef = React.createRef()
// 	}

// 	componentDidMount() {
// 		this.drawChart()
// 	}

// 	drawChart() {
// 		const data = [12, 36, 6, 25, 35, 10, 20]
// 		const w = 500
// 		const h = 400

// 		const accessToRef = d3.select(this.myRef.current).append('svg').attr('width', w).attr('height', h).style('background-color', '#eee').style('padding', 10).style('margin-left', 50)

// 		accessToRef
// 			.selectAll('rect')
// 			.data(data)
// 			.enter()
// 			.append('rect')
// 			.attr('x', (d, i) => i * 70)
// 			.attr('y', (d, i) => h - 10 * d)
// 			.attr('width', 60)
// 			.attr('height', (d, i) => 10 * d)
// 			.attr('fill', 'tomato')
// 	}

// 	render() {
// 		return <div ref={this.myRef}></div>
// 	}
// }

export default BarChart
