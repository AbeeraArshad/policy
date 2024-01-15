import { Fragment, useState,  } from 'react'
import React from 'react'
import { Dialog, Menu, Transition   } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline'
import "../pages/UserDash.css"
import {CChart } from '@coreui/react-chartjs'
import img2 from "../image/adamjee.jpg";
import img3 from "../image/jubilee.jpg";
import img4 from "../image/askari.jpg";
import img5 from "../image/takaful.png";
import img6 from "../image/ubl.png";

const navigation = [
  { name: 'User Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Insurance Offers', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Customer Service', href: '#', icon: UsersIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const stats = [
    { id: 1, name: 'Total Users', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Sales', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Revenue', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
  ]
  const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
  ]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


export const UserDash = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div>
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
                  alt="Your Company"
                />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="space-y-1 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-300" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    {/* Static sidebar for desktop */}
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-sky-400 pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          {/* <img
            className="h-12 w-auto"
            src="https://www.pinclipart.com/picdir/middle/336-3368754_healthcare-it-solution-provider-health-insurance-logo-png.png"
            alt="Your Company"
          /> */}
          <div className="logo">
            <h1>
              Logo Here
            </h1>
          </div>
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-sky-600 text-white' : 'text-indigo-100 hover:bg-sky-600',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
              >
                <item.icon className="mr-3 h-6 w-6 flex-shrink-0 text-sky-700" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
    <div className="flex flex-1 flex-col md:pl-64">
      <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <button
          type="button"
          className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex flex-1 justify-between px-4">
          <div className="flex flex-1">
            {/* <form className="flex w-full md:ml-0" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form> */}
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              className="rounded-full hover:bg-sky-400 bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6 " aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center hover:bg-sky-400 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-20 rounded-full"
                    src="https://e7.pngegg.com/pngimages/881/852/png-clipart-computer-icons-drop-down-list-arrow-font-awesome-down-arrow-angle-hand.png"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      <main>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl font-bold text-sky-900 text-center">User Dashboard</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            {/* <div className="py-4">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div> */}
            {/* /End replace */}
          </div> 
        </div>
      </main>
      
    </div>
    {/* <div className='stats'>
      <h3 className="text-lg font-medium leading-6 text-gray-900 ">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-orange-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-orange-600 hover:text-orange-400">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
          
        ))}
      </dl>
    
    </div> */}
    <div className="content">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8  ">
              <div>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">
                  We have helped power 3,621,473 comparisons
                </h2>

                <p className="mx-auto mt-5 max-w-prose text-xl text-sky-400">
                  Thousands of customers have already benefitted through our
                  free, reliable and expert services. Become a customer now and
                  be rewarded with smart choices for significant savings
                </p>
              </div>
              </div>
           
            </div>
    <div className='chart12'>
   

<div className='chart2'>
<CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
          color: ('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: ('--cui-border-color-translucent'),
        },
        ticks: {
          color: ('--cui-body-color'),
        },
      },
      y: {
        grid: {
          color: ('--cui-border-color-translucent'),
        },
        ticks: {
          color:('--cui-body-color'),
        },
      },
    },
  }}
/>
  </div>
  <div className='chart1'>
    <CChart
  type="doughnut"
  data={{
    labels: ['Life Insurance', 'Travel Insurance', 'Car Insurance', 'Health Insurance'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }}
  options={{
    plugins: {
      legend: {
        labels: {
          color: ('--cui-body-color'),
        }
      }
    },
  }}
/>
</div>

</div>
<div className="bg-white pt-10 partner">
              <div className="mx-auto max-w-9xl py-16 px-6 lg:px-10 ">
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl text-center">
                  Our Partners
                </h2>
                <p className="mx-auto mt-5 max-w-prose text-2xl text-sky-400">
                  Our panel consists of trusted household names from the
                  insurance industry.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-20" src={img2} alt="#" />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-20" src={img3} alt="#" />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-20" src={img4} alt="#" />
                  </div>
                  <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                    <img className="h-20" src={img5} alt="#" />
                  </div>
                  <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                    <img className="h-20" src={img6} alt="#" />
                  </div>
                </div>
              </div>
            </div>
</div>
)
}
  
  export default UserDash;