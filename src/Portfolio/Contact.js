import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_zsq5wkw', form.current, 'wSTHbBAWTrfQ4mTcr')
            .then((result) => {
                console.log(result.text);
                console.log("message Successfully");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='container border'>
            <div style={{
                backgroundImage: `url("https://www.collab2.co.za/wp-content/uploads/2017/06/contact-us-background.jpg")`
            }}>
                <h1 className='text-5xl text-center font-bold my-2 text-white'>Contact</h1>
                <div class="w-full max-w-xs mx-auto">
                    <form onSubmit={sendEmail} ref={form} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='name' />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" name='email' />
                        </div>

                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message... "  ></textarea>
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Send
                            </button>

                        </div>
                    </form>

                </div>
            </div>
            
        </div>
    );
};

export default Contact;