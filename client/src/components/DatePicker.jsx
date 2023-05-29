import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const DatePicker = ({ selectedDate, setSelectedDate }) => {
	const { auth } = useContext(AuthContext)

	const handlePrevDay = () => {
		const prevDay = new Date(selectedDate)
		prevDay.setDate(prevDay.getDate() - 1)
		setSelectedDate(prevDay)
		localStorage.setItem('selectedDate', prevDay)
	}

	const handleNextDay = () => {
		const nextDay = new Date(selectedDate)
		nextDay.setDate(nextDay.getDate() + 1)
		setSelectedDate(nextDay)
		localStorage.setItem('selectedDate', nextDay)
	}

	const formatDate = (date) => {
		const weekday = date.toLocaleString('default', { weekday: 'long' })
		const day = date.getDate()
		const month = date.toLocaleString('default', { month: 'long' })
		const year = date.getFullYear()
		return `${weekday} ${day} ${month} ${year}`
	}

	const isPast = (date) => {
		return (
			date.getFullYear() <= new Date().getFullYear() &&
			date.getMonth() <= new Date().getMonth() &&
			date.getDate() <= new Date().getDate()
		)
	}

	return (
		<div className="flex items-center justify-between gap-2 font-semibold  text-white">
			{auth.role === 'admin' || !isPast(selectedDate) ? (
				<button
					className={'rounded hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600'}
					onClick={handlePrevDay}
				>
					<ChevronLeftIcon className="h-10 w-10 text-white" />
				</button>
			) : (
				<div className="h-10 w-10"></div>
			)}
			<h2 className="text-center text-xl sm:text-2xl">{formatDate(selectedDate)}</h2>

			<button
				className="rounded hover:bg-gradient-to-br hover:from-indigo-600 hover:to-blue-600"
				onClick={handleNextDay}
			>
				<ChevronRightIcon className="h-10 w-10 text-white" />
			</button>
		</div>
	)
}

export default DatePicker
