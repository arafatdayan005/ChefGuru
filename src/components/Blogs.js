import React from 'react'

function Blog() {
  return (
    <>
      <div className='bg-red-100 bg-opacity-50 pb-20 pt-16 text-center'>
        <h3 className='font-bold text-3xl'>Blogs</h3>
      </div>
      <div className='px-48 py-16'>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">1. Tell us the differences between uncontrolled and controlled components</h3>
          <p className='py-4 text-lg'>
            Ans: A controlled component is one that relies on React to manage its state and data flow. This typically means passing state values and callbacks down as props, and using them to update the component's state when necessary. <br /> <br />
            On the other hand, an uncontrolled component is one that manages its own state internally, without any help from React. Typically, this means using DOM refs to access and update form values or other UI elements directly.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">2. How to validate React props using PropTypes?</h3>
          <p className='py-4 text-lg'>
            Ans: In React, we can use the built-in prop-types library to validate the props that are passed to your components. This library provides a set of predefined validators that we can use to check the type and shape of our props. There are many validators available in prop-types, including validators for arrays, objects, functions, and more.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">3. Tell us the difference between nodejs and express js.</h3>
          <p className='py-4 text-lg'>
            Ans: Node.js allows developers to run JavaScript code outside of a web browser, on the server-side. Node.js is used to create scalable, high-performance applications that can handle a large number of connections. <br /> <br />

            On the other hand, Express.js is a web application framework built on top of Node.js. It provides a set of tools and utilities that help developers create web applications for server side. Express.js simplifies the process of creating a web server and handling HTTP requests and responses.
          </p>
        </div>
        <div className='my-6'>
          <h3 className="text-2xl font-semibold">4. What is a custom hook, and why will you create a custom hook?</h3>
          <p className='py-4 text-lg'>
            Ans: In React, a custom hook is a JavaScript function that allows us to reuse stateful logic across multiple components. Custom hooks enable us to extract complex logic from components, making it more reusable.
            <br /> <br />
            We create custom hooks to reuse stateful logic across multiple components and avoid repeating code. Custom hooks are useful when we have complex logic that needs to be shared across multiple components.
          </p>
        </div>
      </div>
    </>
  )
}

export default Blog