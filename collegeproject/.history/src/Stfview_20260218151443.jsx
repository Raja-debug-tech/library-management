import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Stfview() {
    const [student, setStudent] = useState([]);
    const [stdid, setStdid] = useState();
    const [asndstds, setAsnds] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const nav = useNavigate();
    const [addstd,setAddstd]=useState(false);
    const[getstd,setGetstd]=useState(false);

    const addstudentsssss = async () => {
        setLoading(true);
        setA
        try {
            const api = await axios.get('http://localhost:8082/api/groups/nongrpstdnt');
            const val = await api.data;
            setStudent(val);
            console.log(val);
        } catch (error) {
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    const deletes = async (std) => {
        const fltr = student.filter((e) => e.id != std);
        setStudent(fltr);
        await axios.post(`http://localhost:8082/api/groups/${id}/add-student/${std}`);
        console.log('Student added to group');
    };

    const gotoquiz = () => {
        nav(`/staffdash/quiz/${id}`);
    };

    const getstudents = async () => {
        setLoading(true);
        try {
            const api = await axios.get(`http://localhost:8082/api/groups/getstudents/${id}`);
            const values = await api.data;
            setAsnds(values);
        } catch (error) {
            console.error('Error fetching group students:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="stfview-container">
            <style>{`
                .stfview-container {
                    min-height: 100vh;
                    padding: 2rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .dashboard-card {
                    max-width: 1200px;
                    margin: 0 auto;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 24px;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .header {
                    padding: 2.5rem;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }

                .header h1 {
                    margin: 0;
                    font-size: 2rem;
                    font-weight: 700;
                }

                .controls {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1.5rem;
                    flex-wrap: wrap;
                }

                .btn {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 12px;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .btn-primary {
                    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                    color: white;
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
                }

                .btn-secondary {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-1px);
                }

                .btn-danger {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    color: white;
                }

                .btn-danger:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px rgba(239, 68, 68, 0.4);
                }

                .content {
                    padding: 2.5rem;
                }

                .table-container {
                    overflow-x: auto;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    background: white;
                }

                thead th {
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    color: #334155;
                    padding: 1.25rem 1.5rem;
                    font-weight: 600;
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-bottom: 2px solid #e2e8f0;
                }

                tbody td {
                    padding: 1.25rem 1.5rem;
                    color: #475569;
                    border-bottom: 1px solid #f1f5f9;
                    font-size: 0.95rem;
                }

                tbody tr {
                    transition: all 0.2s ease;
                }

                tbody tr:hover {
                    background: linear-gradient(135deg, #eef2ff 0%, #f0f9ff 100%);
                    transform: scale(1.01);
                }

                tbody tr:nth-child(even) {
                    background: #f8fafc;
                }

                .no-data {
                    text-align: center;
                    padding: 4rem 2rem;
                    color: #64748b;
                }

                .no-data h3 {
                    font-size: 1.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }

                .loading {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 3rem;
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(59, 130, 246, 0.2);
                    border-top: 4px solid #3b82f6;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .stfview-container {
                        padding: 1rem;
                    }
                    .header, .content {
                        padding: 1.5rem;
                    }
                    .controls {
                        flex-direction: column;
                    }
                }
            `}</style>

            <div className="dashboard-card">
                <div className="header">
                    <h1>Group {id} - Student Management</h1>
                    <div className="controls">
                        <button className="btn btn-primary" onClick={gotoquiz}>
                            ➕ Create Quiz
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={addstudentsssss}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : '🔍 Add Available Students'}
                        </button>
                        <button 
                            className="btn btn-secondary" 
                            onClick={getstudents}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : '📋 View Group Students'}
                        </button>
                    </div>
                </div>

                <div className="content">
                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : student.length === 0 && asndstds.length === 0 ? (
                        <div className="no-data">
                            <h3>No students found</h3>
                            <p>Click "Add Available Students" or "View Group Students" to get started</p>
                        </div>
                    ) : (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(asndstds.length > 0 ? asndstds : student).map((e, index) => (
                                        <tr key={e.id || index}>
                                            <td>{e.name}</td>
                                            <td>{e.email}</td>
                                            <td>{e.mobileNo}</td>
                                            <td>{e.course}</td>
                                            <td>
                                                <button 
                                                    className="btn btn-danger" 
                                                    onClick={() => deletes(e.id)}
                                                >
                                                     Delete                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Stfview;
