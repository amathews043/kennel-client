import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { LocationList } from '../components/location/LocationList'
import { LocationDetail } from '../components/location/LocationDetail'
import { AnimalList } from '../components/animal/AnimalList'
import { AnimalForm } from '../components/animal/AnimalForm'
import { AnimalDetails } from '../components/animal/AnimalDetail'
import { CustomerList } from '../components/customer/CustomerList'
import { EmployeeList } from '../components/employee/EmployeeList'
import { EmployeeDetail } from '../components/employee/EmployeeDetail'
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { useEffect } from "react"

export const ApplicationViews = () => {
	let navigate = useNavigate();
	useEffect(() => {

		console.log(localStorage.getItem("kennel_customer"))
		if (localStorage.getItem("kennels_customer") === null) {
			return navigate("/login")
		}
	}, [])
	return (
		<Routes>
			<Route path="/">
				<Route index element={< LocationList />} />
				<Route path="locations/:locationId" element={<LocationDetail />} />
				<Route path="customers" element={<CustomerList />} />
			</Route>

			<Route path="/animals">
				<Route index element={<AnimalList />} />
				<Route path=":animalId" element={<AnimalDetails />} />
				<Route path="create" element={<AnimalForm />} />
				<Route path="edit/:animalId" element={<AnimalForm />} />
			</Route>

			<Route path="/employees">
				<Route index element={<EmployeeList />} />
				<Route path=":employeeId" element={<EmployeeDetail />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

		</Routes>
	)
}

