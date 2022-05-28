import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12'>
            <h1 className='py-8 text-4xl font-bold text-center'>Blog-Collection</h1>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Q1-How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>Application এর  কর্মক্ষমতা উন্নত করা ডেভেলপারদের জন্য চাবিকাঠি যারা ব্যবহারকারীদের একটি অ্যাপে নিযুক্ত রাখার জন্য তাদের অভিজ্ঞতাকে ইতিবাচক রাখার বিষয়ে সচেতন।

                        React application গুলিতে, আমরা গতানুগতিক একটি খুব দ্রুত UI নিশ্চিত করি৷ যাইহোক, একটি application বৃদ্ধির সাথে সাথে, বিকাশকারীরা কিছু কর্মক্ষমতা সমস্যার সম্মুখীন হতে পারে।

                        সুতরাং এই নির্দেশিকায়, আমরা pre-optimization কৌশল সহ, একটি React application এর কার্যকারিতা উন্নতি করার পাঁচটি গুরুত্বপূর্ণ উপায় এর মধ্যে রয়েছে:
                        <br />

                        ১. যেখানে প্রয়োজন সেখানে কম্পোনেন্ট স্টেট স্থানীয় রাখা৷<br />
                        ২. অপ্রয়োজনীয় রি-রেন্ডার রোধ করতে react component গুলিকে স্মরণ করা ।<br />
                        ৩. " Dynamic Import()" ব্যবহার করে  react এ কোড-বিভাজন ।<br />
                        ৪. react এ  উইন্ডো করা বা তালিকা ভার্চুয়ালাইজেশন ।<br />
                        ৫. react এ lazy images লোড করার প্রক্রিয়া ।<br />
                    </p>
                </div>

            </div>

            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Q2-What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        React application এর state ম্যানেজ করার জন্য বিভিন্ন পথ রয়েছে।

                        আপনার React application এ  সঠিকভাবে পরিচালনা করার জন্য আপনার চার ধরনের প্রধান রাষ্ট্র আছে।যার মধ্যে রয়েছে -

                        Local state - এটি হল ডেটা যা আমরা এক বা অন্য component এ  পরিচালনা করি। এটি  প্রায়শই useState হুক ব্যবহার করে react এ পরিচালিত হয়।

                        Global state - এটি হল এমন ডেটা যা আমরা একাধিক component জুড়ে পরিচালনা করি। একটি Global state এর প্রয়োজন হয় , যখন আমরা আমাদের application এর যেকোনো স্থানে বা অন্তত একাধিক উপাদানে ডেটা পেতে ও আপডেট করতে চাই।

                        Server state - একটি বাহ্যিক সার্ভার থেকে আসা ডেটা অবশ্যই আমাদের UI state এর  সাথে একত্রিত হতে হবে৷ এটি একটি সহজ ধারণা কিন্তু আমাদের সমস্ত local এবং  global UI stateগুলির পাশাপাশি পরিচালনা করা কঠিন হতে পারে।

                        URL state - আমাদের ইউআরএল-এ থাকা ডেটা, পাথনাম এবং কোয়েরি প্যারামিটার সহ। এটি প্রায়ই রাষ্ট্রের একটি বিভাগ হিসাবে অনুপস্থিত, তবে এটি একটি গুরুত্বপূর্ণ। অনেক ক্ষেত্রে, আমাদের অ্যাপ্লিকেশানের অনেক বড় অংশ ইউআরএল স্টেটে অ্যাক্সেস ।

                    </p>
                </div>

            </div>

            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Q3-How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        Prototypical Inheritance হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করার জন্য ব্যবহৃত হয়।

                        এটি একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে।

                        যদিও প্রোটোটাইপ উত্তরাধিকারটি প্রথমে আনাড়ি মনে হতে পারে, আপনি এটি বোঝার সময় এর সরলতা এবং সম্ভাবনাগুলি উপভোগ করতে পারেন।

                        প্রথাগতভাবে, একটি বস্তুর [[Prototype]] পেতে ও সেট করতে, আমরা Object.getPrototypeOf এবং Object ব্যবহার করি।
                    </p>
                </div>

            </div>

            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Q4-Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                </div>
                <div className="collapse-content">
                    <p>
                        যদি আমরা হুকের মান এইভাবে আপডেট করি: পণ্য = [...]; তারপর এটি আমাদের একটি ত্রুটি দেখাবে কারণ আমরা হুকটিকে ধ্রুবক (const) হিসাবে Destructuring করি তবে আমরা যদি এটি let হিসাবে ব্যবহার করি তবে এটি রান করবে বা এর মান সেট করবে। একটি সমস্যা আছে যদি আমরা স্টেট আপডেট করতে setProducts ব্যবহার না করি তাহলে কম্পোনেন্ট পুনরায় রেন্ডার হবে না। setProducts অসিঙ্ক্রোনাস কাজ সম্পন্ন করা হয়. তারপর এটি নতুন মান মার্জ করবে এবং পুরানো মান প্রতিস্থাপন করবে তারপর সেই উপাদানটিকে পুনরায় রেন্ডার করবে।
                    </p>
                </div>

            </div>

            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">

                <div className="collapse-title text-xl font-medium">
                    Q6-What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        Unit Test হল একটি পরীক্ষার পদ্ধতি যা পৃথকভাবে একটি সফ্টওয়্যারের ইউনিটকে আলাদাভাবে পরীক্ষা করে। এর মধ্যে আবার একটি প্রদত্ত ইনপুটের জন্য একটি function বা  component এর  আউটপুট যাচাই করা জড়িত।

                        এটি  react application এর জন্য গুরুত্বপূর্ণ, কারণ এটি react এর component গুলির  কার্যকারিতা পৃথকভাবে পরীক্ষা করতে সহায়তা করে। তেমনিভাবে , যেকোন কোডের  ত্রুটি শুরুতেই সনাক্ত করা যেতে পারে, পরবর্তী পর্যায়ে এটি সংশোধন করতে সময় বাঁচায়।

                        react component গুলির জন্য, এর অর্থ হতে পারে যে component টি নির্দিষ্ট props এর জন্য সঠিকভাবে রেন্ডার করে তা পরীক্ষা করা। অন্য কথায় , Unit Test লেখার অর্থ হল আমরা এমন কোড লিখি যা যাচাই করে যে আমাদের কোডটি প্রত্যাশিতভাবে কাজ করে।


                        করার উপর নির্ভর করে।
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;