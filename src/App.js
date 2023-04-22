import { useState, useRef } from 'react';
import './style.css';

function App() {
	let [title, setTitle] = useState(['아이템추천', '맛집추천', '놀거리추천']);
	let [num, setNum] = useState([0, 1, 2]);
	let [modal, setModal] = useState(false);
	let [like, setLike] = useState([0, 0, 0]);
	let [value, setValue] = useState('');
	let date = useRef('4월 22일');
	return (
		<>
			<div className='App'>
				<div className='black-nav'>
					<h4>React Blog</h4>
				</div>
				<div>
					{title.map(function (_, i) {
						return (
							<div className='list' key={i}>
								<h4
									onClick={() => {
										setModal(true);
										setNum(i);
									}}
								>
									{title[i]}
									<span
										onClick={(e) => {
											e.stopPropagation();
											let likes = [...like];
											likes[i] = likes[i] + 1;
											setLike(likes);
										}}
									>
										👍
									</span>
									{like[i]}
								</h4>

								<p>{date.current} 발행</p>
								<button
									onClick={() => {
										let copy = [...title];
										copy.splice(i, 1);
										setTitle(copy);
									}}
								>
									글삭제
								</button>
							</div>
						);
					})}
				</div>
				<button onClick={() => setModal(!modal)}>열기</button>
				{modal && <Modal title={title} num={num} date={date} />}
				<input
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						let copy = [...title];
						copy.push(value);
						setTitle(copy);
						let copy1 = [...like];
						copy1.push(0);
						console.log(copy1);
						setLike(copy1);
					}}
				>
					글추가
				</button>
			</div>
		</>
	);
}

function Modal(props) {
	return (
		<div className='modal'>
			<h4>{props.title[props.num]}</h4>
			<p>날짜 : {props.date.current}</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
