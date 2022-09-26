import React from 'react';
import { useRouter } from 'next/router'

const Pid = () => {
    const router = useRouter()
    const{pid}=router.query
    console.log(pid)
    return (
        <div>
            <h2>kkdkdkdk dkdkd </h2>
        </div>
    );
}

export default Pid;
