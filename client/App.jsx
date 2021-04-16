import React from 'react';

export const App = ({questions, answers, handleModifyAnswerVotes}) => (
    <div className="container mt-5">
        <h1>
            Dev Team Decision Tool
        </h1>
        {questions.map(({questionId, content})=>(
            <div className="mb-2" key={questionId}>
                <h3>
                    {content}
                </h3>
                <div>
                    {answers.filter(answer => answer.questionId === questionId).map(
                        ({content, upvotes, answerId}) =>(
                            <div key={answerId}>
                                <span>
                                    {content} - {upvotes}
                                </span>
                                <span className="ml-2">
                                    <button className="btn btn-sm btn-outline-secondary" onClick={()=>handleModifyAnswerVotes(answerId, 1)}> + </button>
                                    <button className="btn btn-sm btn-outline-secondary" onClick={()=>handleModifyAnswerVotes(answerId, -1)}> - </button>
                                </span>
                                
                            </div>
                        )
                    )}
                </div>
            </div>
        ))}
    </div>
)