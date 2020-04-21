import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const BarChart = () => {
	const myRef = useRef()
	useEffect(() => {
		drawChart()
	})

	function drawChart() {
		const data = [12, 36, 6, 25, 35, 10, 20]
		const w = 500
		const h = 400

		const accessToRef = d3.select(myRef.current).append('svg').attr('width', w).attr('height', h).style('background-color', '#eee').style('padding', 10).style('margin-left', 50)

		accessToRef
			.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d, i) => i * 70)
			.attr('y', (d, i) => h - 10 * d)
			.attr('width', 60)
			.attr('height', (d, i) => 10 * d)
			.attr('fill', 'tomato')
	}

	return <div ref={myRef}></div>
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
