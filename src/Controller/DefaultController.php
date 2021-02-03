<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(): Response
    {
        return $this->render('accueil.html.twig');
    }

    /**
     * @Route("/pochettes-officielles", name="offi")
     */
    public function offiAction(): Response
    {
        return $this->render('Pages/officielles.html.twig');
    }

    /**
     * @Route("/pochettes-alternatives", name="alter")
     */
    public function alterAction(): Response
    {
        return $this->render('Pages/alternatives.html.twig');
    }

    /**
     * @Route("/enter-in-my-vision", name="vision")
     */
    public function visionAction(): Response
    {
        return $this->render('Pages/vision.html.twig');
    }

    /**
     * @Route("/logos", name="logo")
     */
    public function logoAction(): Response
    {
        return $this->render('Pages/logos.html.twig');
    }

    /**
     * @Route("/affiches-et-posters", name="affiche")
     */
    public function afficheAction(): Response
    {
        return $this->render('Pages/affiches.html.twig');
    }

    /**
     * @Route("/wallpaper", name="wallpaper")
     */
    public function wallpaperAction(): Response
    {
        return $this->render('Pages/wallpaper.html.twig');
    }

    /**
     * @Route("/concert-13block", name="concert_13block")
     */
    public function concert_13blockAction(): Response
    {
        return $this->render('Pages/concert_13block.html.twig');
    }

    /**
     * @Route("/concert-zamdane", name="concert_zamdane")
     */
    public function concert_zamdaneAction(): Response
    {
        return $this->render('Pages/concert_zamdane.html.twig');
    }

    /**
     * @Route("/concert-palace-party", name="concert_palace")
     */
    public function concert_palaceAction(): Response
    {
        return $this->render('Pages/concert_palace.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contactAction(): Response
    {
        return $this->render('Pages/contact.html.twig');
    }

    /**
     * @Route("/shop", name="shop")
     */
    public function shop(): Response
    {
        return $this->render('Pages/shop.html.twig');
    }

}
