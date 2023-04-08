<?php

namespace App\QueryBuilders;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;

final  class RecipesQueryBuilder extends QueryBuilder
{
    private Builder $model;

    function __construct()
    {
        $this->model = Recipe::query();
    }

    function getAll(): Collection
    {
        return $this->model->get();
    }

    function getAllWithPaginage(int $quantity = 12): Collection
    {
        return $this->model->get()->paginate($quantity);
    }

    public function getRecipeById(int $id)
    {
        return $this->model->where('id', $id)->get();
    }

    public function getRecipeIdByCaloricNorm(int $caloricNorm, int $fats, int $proteins, int $carbohydrates, int $categoryId)
    {
        return $this->model->select('id')->where('category_id', $categoryId)
            ->whereBetween('calorie', [$caloricNorm-350, $caloricNorm+350])
            ->whereBetween('fats', [$fats-9, $fats+9])
            ->whereBetween('proteins', [$proteins-33, $proteins+33])
            ->whereBetween('carbohydrates', [$carbohydrates-35, $carbohydrates+35])
            ->inRandomOrder()->first();
    }

    public function getAllRecipesMenu(int $breakfest, int $dinner, int $lunch, int $firstSnack, int $secondSnack)
    {
        return $this->model->where('id', $breakfest)->orwhere('id', $dinner)->orwhere('id', $lunch)->orwhere('id', $firstSnack)->orwhere('id', $secondSnack)->get();
    }

    public function getRecipeByCategoryId(int $category_id): Collection
    {
        return Recipe::query()->where('category_id', $category_id)->get();
    }

    public function getByIdUpdate(int $id)
    {
        return $this->model->where('id', $id);
    }
    public function getOneByIdFirst(int $id)
    {
        return $this->model->where('id', $id)->first();
    }

}
