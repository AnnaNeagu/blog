class CommentMailer < ApplicationMailer
    def new_comment_email
        @comment = params[:comment]
        mail(to: "Ana.Neagu@theaccessgroup.com", subject: "There's a new comment from #{@comment.commenter}")
    end
end