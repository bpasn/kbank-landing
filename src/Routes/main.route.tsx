import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutScreen from '../components/Layout/screens/LayOutScreen';
import LayoutAuth from '../components/Layout/auth/LayoutAuth';
import SignIn from '../screens/auth/SignIn';
import CorporateScreen from '../screens/Corporate/CorporateScreen';
type Props = {}

const RouterApp = (props: Props) => {
    return (
        <Router>
            <Routes>
                <Route path='/Corporate' element={<LayoutScreen />}>
                    <Route index  element={<CorporateScreen />} />
                </Route>
                <Route path='/auth' element={<LayoutAuth />}>
                    <Route index element={<SignIn />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default RouterApp