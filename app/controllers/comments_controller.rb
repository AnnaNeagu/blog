class CommentsController < ApplicationController

  #http_basic_authenticate_with name: "ana", password: "ana", only: :destroy
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article)

    if @comment.save
      CommentMailer.with(comment: @comment).new_comment_email.deliver_later
    end
  end

  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article), status: 303
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body, :status)
    end 
end
