import React from 'react'
// import Chart1 from './Chart1'
import Chart2 from './Chart2'
import './App.css'

const data1 = [12, 26, 6, 25, 35, 10, 20]
const data2 = [15, 10, 20]
const data3 = [12, 6, 6, 25, 19]

const w = 500
const h = 300

function App() {
	return (
		<div className="container">
			<h1>My D3 Chart</h1>
			<div className="chart">
				{/* <Chart1 /> */}
				<div className="chart__item">
					<Chart2 data={data1} w={w} h={h} color="#ffd460" />
				</div>
				<div className="chart__item">
					<Chart2 data={data2} w={w} h={h} color="#f07b3f" />
				</div>
				<div className="chart__item">
					<Chart2 data={data3} w={w} h={h} color="#ea5455" />
				</div>
			</div>
		</div>
	)
}

export default App
