<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class MainController extends AbstractController
{
    #[Route(path: '/{_locale}', name: 'main', requirements: ['_locale' => 'en|pl'], defaults: ['_locale' => 'pl'])]
    public function __invoke(TranslatorInterface $translator, Request $request): Response
    {
        return $this->render('main.html.twig', [
            'locale' => $request->getLocale()
        ]);
    }
}
