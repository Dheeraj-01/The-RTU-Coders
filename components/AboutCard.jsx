import React, { useState, useEffect } from 'react'
import { getMembers } from '../services';

const AboutCard = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        getMembers().then((result) => setMembers(result)).catch((err) => {
            console.log(err);
        })
    }, []);
    // console.log(members);
    return (
        <div >
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h1 className="font-bold text-xl border-b-2 py-2">About</h1>
                <p className=" py-4">The RTU Coders is Coding Community of University Department, Rajasthan Technical University Kota. Who by passion and by choice learn, share, grow, and code together to build an environment of coding enthusiasts in campus.</p>
                <p>The RTU Coders was initiated by <b>Abhishek Kumar</b> of Information Technology Branch (2017-21 Batch) on this beautiful Palindromic date 02-02-2020</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h1 className="font-bold text-xl border-b-2 py-2">Mission</h1>
                <p className=" py-4">Create an impact by building a strong programming community from problem solvers to problem setters and get placed in multinational companies. Crack Google Competitions, Facebook Hackercup, ICPC etc.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h1 className="font-bold text-xl border-b-2 py-2">Vision</h1>
                <p className=" py-4">Our vision is to make learning competitive programming accessible for students of RTU.</p>
                
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                <h1 className="text-center font-medium text-3xl mt-4 mb-10">RTU Coders Team</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {members.map((member, index) => (
                        <>
                            <div className="w-full bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={index}>
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src={member.image.url} alt="photo" />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                                    <p className="text-base text-gray-700 font-bold">{member.designation}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <a href={member.instagram} className="px-1" title="instagram" target="_blank">
                                        <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" />
                                    </a>
                                    <a href={member.facebook} className="px-1" title="facebook" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/facebook-new.png" />
                                    </a>
                                    <a href={member.github} className="px-1" title="github" target="_blank">
                                        <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" />
                                    </a>
                                    <a href={member.codechef} className="px-1" title="codechef" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/codechef.png" />
                                    </a>
                                    <a href={member.codeforces} className="px-1" title="codeforces" target="_blank">
                                        <img src="https://i.imgur.com/axBKFcw.png" className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={index}>
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://source.unsplash.com/900x900/?person" alt="photo" />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                                    <p className="text-base text-gray-700 font-bold">{member.designation}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <a href={member.instagram} className="px-1" title="instagram" target="_blank">
                                        <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" />
                                    </a>
                                    <a href={member.facebook} className="px-1" title="facebook" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/facebook-new.png" />
                                    </a>
                                    <a href={member.github} className="px-1" title="github" target="_blank">
                                        <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" />
                                    </a>
                                    <a href={member.codechef} className="px-1" title="codechef" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/codechef.png" />
                                    </a>
                                    <a href={member.codeforces} className="px-1" title="codeforces" target="_blank">
                                        <img src="https://i.imgur.com/axBKFcw.png" className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={index}>
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://source.unsplash.com/900x900/?person" alt="photo" />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                                    <p className="text-base text-gray-700 font-bold">{member.designation}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <a href={member.instagram} className="px-1" title="instagram" target="_blank">
                                        <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" />
                                    </a>
                                    <a href={member.facebook} className="px-1" title="facebook" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/facebook-new.png" />
                                    </a>
                                    <a href={member.github} className="px-1" title="github" target="_blank">
                                        <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" />
                                    </a>
                                    <a href={member.codechef} className="px-1" title="codechef" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/codechef.png" />
                                    </a>
                                    <a href={member.codeforces} className="px-1" title="codeforces" target="_blank">
                                        <img src="https://i.imgur.com/axBKFcw.png" className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={index}>
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://source.unsplash.com/900x900/?person" alt="photo" />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                                    <p className="text-base text-gray-700 font-bold">{member.designation}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <a href={member.instagram} className="px-1" title="instagram" target="_blank">
                                        <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" />
                                    </a>
                                    <a href={member.facebook} className="px-1" title="facebook" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/facebook-new.png" />
                                    </a>
                                    <a href={member.github} className="px-1" title="github" target="_blank">
                                        <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" />
                                    </a>
                                    <a href={member.codechef} className="px-1" title="codechef" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/codechef.png" />
                                    </a>
                                    <a href={member.codeforces} className="px-1" title="codeforces" target="_blank">
                                        <img src="https://i.imgur.com/axBKFcw.png" className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>
                            <div className="w-full bg-gradient-to-r from-yellow-300 via-red-500 to-pink-400 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center" key={index}>
                                <div className="mb-8">
                                    <img className="object-center object-cover rounded-full h-36 w-36" src="https://source.unsplash.com/900x900/?person" alt="photo" />
                                </div>
                                <div className="text-center mb-4">
                                    <p className="text-xl text-white font-bold mb-2">{member.name}</p>
                                    <p className="text-base text-gray-700 font-bold">{member.designation}</p>
                                </div>
                                <div className="flex flex-wrap">
                                    <a href={member.instagram} className="px-1" title="instagram" target="_blank">
                                        <img src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" />
                                    </a>
                                    <a href={member.facebook} className="px-1" title="facebook" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/facebook-new.png" />
                                    </a>
                                    <a href={member.github} className="px-1" title="github" target="_blank">
                                        <img src="https://img.icons8.com/ios-glyphs/32/000000/github.png" />
                                    </a>
                                    <a href={member.codechef} className="px-1" title="codechef" target="_blank">
                                        <img src="https://img.icons8.com/fluency/32/000000/codechef.png" />
                                    </a>
                                    <a href={member.codeforces} className="px-1" title="codeforces" target="_blank">
                                        <img src="https://i.imgur.com/axBKFcw.png" className="h-8 w-8" />
                                    </a>
                                </div>
                            </div>

                        </>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default AboutCard
