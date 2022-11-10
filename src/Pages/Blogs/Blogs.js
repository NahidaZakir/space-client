import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='bg-base-200 pt-10'>
            <h1 className='text-4xl font-bold text-center'>Blogs</h1>
            <div className='grid gap-10 grid-cols-1 lg:grid-cols-2 pt-10 pb-20 pr-10 pl-10'>

                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-justify">Difference between SQL and NoSQL</h2>
                        <p>SQL: 1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) 2. These databases have fixed or static or predefined schema 3.These databases are not suited for hierarchical data storage 4.These databases are best suited for complex queries 5.Vertically Scalable</p>
                        <br></br>
                        <p>NoSQL: 1.Non-relational or distributed database system 2.They have dynamic schema 3.These databases are best suited for hierarchical data storage. 4.These databases are not so good for complex queries 5.Horizontally scalable</p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <p>Javascript: 1.Javascript is a programming language that is used for writing scripts on the website.  2.	It is basically used on the client-side. 3.Javascript is capable enough to add HTML and play with the DOM. 4.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. 5.Javascript is used in frontend development. 6.	Some of the javascript frameworks are RamdaJS, TypedJS, etc. 7.It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.
                        </p>
                        <br></br>
                        <p>
                            NodeJS : 1.	We can run Javascript outside the browser with the help of NodeJS. 2.It is mostly used on the server-side. 3.
                            Nodejs does not have capability to add HTML tags. 4.V8 is the Javascript engine inside of node.js that parses and runs Javascript. 5.Nodejs is used in server-side development.6. Some of the Nodejs modules are Lodash, express etc. 7.These modules are to be imported from npm. 8.Nodejs is written in C, C++ and Javascript.
                        </p>

                    </div>
                </div>

                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>

                    </div>
                </div>



            </div>
        </div>

    );
};

export default Blogs;