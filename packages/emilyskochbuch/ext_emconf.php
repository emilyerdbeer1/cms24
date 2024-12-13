<?php

/**
 * Extension Manager/Repository config file for ext "emilyskochbuch".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'EmilysKochbuch',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Fhooe\\Emilyskochbuch\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Emily Huber',
    'author_email' => 's2310456008@fhooe.at',
    'author_company' => 'fhooe',
    'version' => '1.0.0',
];
