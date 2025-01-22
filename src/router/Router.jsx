import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<h1>HOME</h1>}></Route>
			<Route path='/about' element={<h1>ABOUT</h1>}></Route>
		</Routes>
	);
};
export default Router;
