class Apis::Articles::V1::ArticlesController < ApplicationController
  def index
    @articles = []
    Article.all.each do |article|
        @articles << get_formatted_article(article)
    end
    render json: @articles
    end

    def new
      @article = Article.new
    end

    def create
      @article = Article.new(article_params)
      if @article.save
        head 200 
      end
    end

    def destroy
      @article = Article.find(params[:id])
      @article.destroy
      head 200
    end
    

    private 
    def get_formatted_article(article)
        formatted_article ={
            id: article.id,
            title: article.title,
            body: article.body,
            created_at: article.created_at,
            updated_at: article.updated_at
        }
  end

  def article_params
    params.require(:article).permit(:title, :body, :status, :user_id)
  end

end


