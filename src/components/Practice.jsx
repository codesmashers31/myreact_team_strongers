// import { useState, useCallback } from "react";

// function slowFunction(num) {
//   console.log("🌀 Slow Function Running...");
//   for (let i = 0; i < 1000000000; i++) {} // heavy loop
//   return num * 2;
// }

// export default function AppUseCallback() {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   // useCallback caches the FUNCTION itself
//   const memoizedSlowFunction = useCallback(() => {
//     return slowFunction(number);
//   }, [number]);

//   const themeStyles = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//     padding: "20px",
//     minHeight: "100vh",
//   };

//   return (
//     <div style={themeStyles}>
//       <h2>useCallback Example 🚀</h2>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />
//       <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>

//       {/* Call the memoized function */}
//       <p>Result: {memoizedSlowFunction()}</p>
//     </div>
//   );
// }



// // Use Memo

// // import { useState, useMemo } from "react";

// // function slowFunction(num) {
// //   console.log("🌀 Slow Function Running...");
// //   for (let i = 0; i < 1000000000; i++) {} // heavy loop
// //   return num * 2;
// // }

// // export default function AppUseMemo() {
// //   const [number, setNumber] = useState(0);
// //   const [dark, setDark] = useState(false);

// //   // useMemo caches the RESULT of slowFunction
// //   const doubleNumber = useMemo(() => {
// //     return slowFunction(number);
// //   }, [number]);

// //   const themeStyles = {
// //     backgroundColor: dark ? "black" : "white",
// //     color: dark ? "white" : "black",
// //     padding: "20px",
// //     minHeight: "100vh",
// //   };

// //   return (
// //     <div style={themeStyles}>
// //       <h2>useMemo Example 🚀</h2>
// //       <input
// //         type="number"
// //         value={number}
// //         onChange={(e) => setNumber(Number(e.target.value))}
// //       />
// //       <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
// //       <p>Result: {doubleNumber}</p>
// //     </div>
// //   );
// // }




import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
// import { useReducer } from "react";


export default function Practice() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  )
}


// 1. Website Pages (Core Structure)

// Home Page – Hero banner, product highlights, testimonials, CTA.

// About Page – Story, mission, team.

// Products/Services Page – All products with categories/filters.

// Product Detail Page – Full info, images, pricing, add-to-cart.

// Cart Page – Items user selected.

// Checkout Page – Address, payment, confirm order.

// My Orders / Profile Page – Track history & personal info.

// Testimonials/Reviews Page – Customer experiences.

// FAQ Page – Quick answers.

// Contact Page – Form, map, social links.

// Blog/News Page – Articles, updates.

// Careers Page – Jobs & hiring info.

// 🔹 2. Homepage Sections (Must-have Blocks)

// Navbar (logo, menu, login/signup)

// Hero Banner (carousel / video + CTA)

// Features / Services section

// Products / Portfolio preview

// Pricing plans / Packages

// Testimonials & Reviews

// Statistics / Achievements (counters)

// Newsletter subscription form

// Footer (links, social media, copyright)

// 🔹 3. UI/UX Components (Extra Elements for Pro Feel)

// Carousel – For banners, testimonials, product sliders.

// Modal / Popup – For login, register, quick view.

// Tooltip – Small info hints on hover.

// Popover – Bigger info than tooltip.

// Dropdowns – Menus, filters.

// Multi-select Dropdown – For selecting multiple items.

// Accordion / Collapse – FAQ style expand/collapse.

// Tabs / Pills – Section switch without page reload.

// Toast Notifications – Non-blocking success/error messages.

// SweetAlert – Beautiful alert boxes for confirmation.

// FontAwesome / Bootstrap Icons – Icons for UI polish.

// Progress Bars & Spinners – Show loading/progress state.

// Badges – For counts (like cart items).

// Pagination – For products/blog pages.

// Forms with Validation – Login, Register, Contact.

// Input Groups – Search box with icon/button.






// const [state,dispatch] = useReducer(reducerfunction(state,action)=>{},initstate)