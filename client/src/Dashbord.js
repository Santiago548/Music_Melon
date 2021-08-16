import React from 'react'
import { useState } from 'react'
import useAuth from "./useAuth"
import { Container, Form } from "react-bootstrap"

export default function Dashbord({ code }) {
    const accessToken = useAuth(code)
    const [ search, setSearch ] = useState("")
    return <Container className="d-flex flex-column py-2" style={{
        height: "100vh"}}>
            <Form.Control 
            type="Search" 
            placeholder="Search songs/ Artist" 
            value={search} 
            onChange={e => setSearch(e.target.value)}
            />
            <div ClassName="flex-grow-1 my-2" style={{ overflowY: "auto"}}>
                Songs
            </div>
            <div>Bottom</div>
        </Container>
}
