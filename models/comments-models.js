const connection = require('../db/connection')


exports.updateComments = (commentId, newVote) => {
    console.log(commentId, 'hello model')
    return connection('comments')
        .where({ 'comment_id': commentId })
        .increment('votes', newVote)
        .returning('*').then(response => {
            console.log(response.length)
            if (response.length === 0) {
                return Promise.reject({ status: 404, msg: "comment not found" });
            }
            else { return response }
        })
}

exports.destoryComment = (commentId) => {
    return connection('comments')
        .where({ 'comment_id': commentId })
        .delete('comments')
        .then(response => {
            if (response.length === 0) {
                return Promise.reject({ status: 404, msg: "comment not found" });
            }
            else { return response }
        })
}
