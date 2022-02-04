# class CharacterMailer < ApplicationMailer
#     def new_character_email
#         @user = params][:user]
#         @character = params[:character]
#         mail(to:@user.email, subject :"Thanks for creating #{@character.character_name}!")
#     end
# end

class CommentMailer < ApplicationMailer
    def new_comment_email
        @comment = params[:comment]
        mail(to: "Ana.Neagu@theaccessgroup.com", subject: "There's a new comment from #{@comment.commenter}")
    end
end