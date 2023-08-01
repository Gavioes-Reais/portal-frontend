import React from 'react'
import NavBar from '../../components/Navbar/NavBar';

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './home.module.css'
import MaterialCard from '../../components/MaterialCard/MaterialCard';

const cursosMocados = [
    {
        id: 1,
        title: 'Programação Orientada a exemplo',
        series: '2° Ano',
        percentage_completed: 70,
        img: 'data:image/jpeg;base64,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'
    },
    {
        id: 2,
        title: 'Estatistica',
        series: '3° Ano',
        percentage_completed: 20,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUThdgb6DsdbctWnHD_-qKyp_UfSAuuS0vlQ&usqp=CAU'
    },
    {
        id: 3,
        title: 'Algoritmos',
        series: '1° Ano',
        percentage_completed: 90,
        img: 'data:image/png;base64,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'
    },
    {
        id: 4,
        title: 'Ingles',
        series: '1° Ano',
        percentage_completed: 100,
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAACmCAMAAABqbSMrAAABOFBMVEUALFMAJEfJExD///8AJEbHAAAAJkoAI0bLAADIDwv+8fHNHhvUYWDbaGcAIk0AJlEhIkHx9PZhe4/PEgsAE0YAH0QABjkAFkcAEz4AADMAADgALVS4xc4AKFAAI00AHksAAC/g6OwAF0AAAD/Fz9atusJQbYTAxcxtfIz21tYAGkmHjpoADkQmRGDoo6O7FBKmFx+WGSUqTm1KWnOSo7Ho7fCAiJhGIDt7HC4sIkGClaWDGytrHjfV3OFxHTKzFRk5IT5hHjWNGihOIDpYHzecGCKoFx7li4rfeHfttLPTQ0H75+Zid4zwv75JY3wgQ2S1VlwUMVFzRFTnmpqdrLjVUE61AAHRMjBeACPTPz3gf35viZzyysk7WnbW0tczQVtOcIgAACjHtLnhyswfBzMAAB6GR1Rma3zFrV1fAAAWgklEQVR4nOWda3vaSLKAuVmykgmYSAgMFpirGQLBxuALjoxjm2SyIeawYTY76zAze27z///B6ZukbiFQCzCWcupDniBLovVSXV1VXd0KhdxECG9JBNemBEFyQmxbwGI/BDFB3BavH4LYFvXrxyC2Tf36EYhtV7+CT2zb+hV0YhvUL2HvfI/TPQkusQ3q182HiBwZvItxMQsqsQ3q17ksRSIRSY7c3vAgCyaxTdqvNuQFRZaOzzmQBZHYJnmdyxFTJHnAgSx4xDbqT1xTwCCy40tXZEEjtll/4j0DDCK7Fd2QBYrYpuOhPRswYMsi738kYpv2V4XbOWIR+YObXxYYYk8Rbw9355BJrkoWFGJPEQ8J5ycRWbIr2YnLLxMIYk+VzxH2rtt2ZPLApVsGgdjTxduCcDewIZOk+4ATe+J8IURmU7LrYBNbR79SpYyaAo8o7u2JsVhYCGdKqbnbCfdtFpl8tfyuvia2jn6JqVa9X/2PwaDdjkTag8GH49s39ZZamidwxfZL+Ta4OraqfgF1EkKJZDQafbUrSdg4SdLuC3CglhfCtl9BuGT7pTx0ubtvia3GK0amEzGwHQsEAvY6noMTmzZmF4ySyceB1LHcSrxi5uzrImDojwLb2YVzxpLJJy7f4ktiq9gvkXqSpcDm7i8eM8QCaMdW0C/2MdyA2ZEx8aV8ETRi3nnZn8EdWI75FoHJksnB8mBX8SfsT+AOLMTWtQj3DLFLb7/P84pn/RLnm88FjPkq4Y4aK6W2Sxt8RMy7fjk1nhMYbcmEO0rH5GFgsj3e7ZfTXXiBhULWfZhe6RZW+oaYV/1a0G5+YNQ3MpZfcjFjfiHmDdfCVnsARhO7sohJg2Dk+b3xcjD3WLwAo6IKgfJgXTulP4h54hUTcgtu4wUYrWOxNjVWunVKX0RJXngt1C+vwKiR5oZSMbeR0hc65oHXYv3yDMwiRht++dy9Ec9OjJ/XEv3yDszqlcIHs1NKA55fbfMMPAk/r1RDW3wbz8BCJUPH9iwrJr/naMgzE+PmVdKrucbC23gFlm/2JykCwOqUUpujJc+sY7zA1Go0mnxsLCLgDZimzPRoJWPo2EDypGLPS4yTV2YUhVKsNZ37pSdg6fEB+OPnvxMVo0ZKHiv2zMT4eKUmySiWyjjtdBsPwOLpLrzR193dPXJ3YWgSk+/9ToyLl5g9iJoy1Qrzt+EGpjVHPfCXLy93JOmDcf8ba6D8sKwdfiDG1b5ULUpJ8rE5B4ITmKZ0KuD4z7/uSMhiGXb/xFIxd3f/eYlxNS/8j48vaGT6g92U8QFr5Kbg6ItfdtCJ0s5PE2L3Ly1gLjMiz06Mp3HCe3nn5SeaWPQgl2aQ8QDLl/vwrLcywbX7JTrNkm84tpwxvp/w2YhxNQ5EyNLOt58ZZN08bcrcgWnNWpEYL/j3nd2v8C4t0invPJr95yPG0TLxn7voEXdeMf2y97qcMG/jBkwjrsRPBNfOL5/xCKKSLzF9MfmEdw3w8xDj4JX58pvxmB8ZJdNnpilzAVbQoCvx4l+G8frV1FYShQsXVgzOnTN/FmLuzSrVgd3ZxSzspgxES5o7sET5NTJeEYIrQt2knyEPv2v2yTteYM9CjAdYklaOv7GmrB+PuwBDcVA0+v2bo5omDbNvJi14x8lnIubeKKGAnAHgO+0Q88OYsuKorC0BpjVyVWi8XhlXv/rM9OqaER+9M/tk28NGBtsn5t4kDVhs5G5++cYMcKZUOoq2CFi80IfG66Ohn78x+pl8VOIhkhi7tCJwPt/V+D39BkyEZ4GABvoEX3fJc3/7wiCbhprOwLLosk8vyWUSawGnKF9kfJE1Tr73AmzbxHjbE28gVfnF6Fm/2lTFEdgjioP+Zhivf9kUE/u+pANaU25zRkxMlTIZUjObgmIcBiKiFmqJOBCN8aW1eKNRiGv2I/kladBNALOMRBoZIxIGwsdnTFnUCRhjvH5ijBcwfcSL04gbYfquthxPSlVP691uv36qpsLiKRDs7YoC+r8I/J5c52FUr9dPx00z/og3Z4/woo7p+RTwkVo8vRYyN2Bi3JRCuQOHO+CrE/nqDuyjce6374xG9stN875EYWKWJ7ZHfb/aqhqppSQgBf9fRd5uqgWPAbcE5jaJ9KpjHH8oNd04NEN8tEa/R+4yDS3JnK8LTJzoRUpwK34m8p3RGSdgn78b57Jn9ui7kvBIsFbu3lC8utRlYQxsSgF7wwADMoLE0lPrQAcCy4+L1M9VW5xrXxdY6iHKL05dkkPOcHW6leOxrD6TiIvqWdEdWHSshQqP1sciTHhq4yRzzsPqOuYCLNN/emAknrSiI/nKsPoq1pRit/7w15tKP7MYWHKcyI1QB6imQ2WEZzqq1bvFKdSmJtKv4mOngztmMreyHXMBxvzCTwRMJ86+ZfWN+Dt1ik7oqmqphFaaLAGmAsUKwb8Wm1oH/qVfzufjjcIEoMEap8cbmtaII3bTlTulG7DfX3BL9Cca2Gfu634na2wurWGSANtHKtPfN8PxJcAyYDhvQjemV4ijGZsaNv9QlQoI0hgNy/kxUrH4qirmAiz10oNEKJE8XEcGxT3zYhIcpSaoIx1a6YtlwEQhVIaAdaJhvXHTcFxm8POBgj81Uad5yD8NsNiuxC8Rhhi37JJQyKrkkTEwmCdBSHiAZUGfRZrVLxAbFq3OGkjLUHgWrRNDH0d37a7aJ12Aza9w37yYNShWcITjS+xSzFJWc5YAq9XO0Gippw0mUDvr0G9Noz+ckk6I9a/qOFu4PrDzbQB7j7+LyvDgTor9hT+4gBlSSUAuijm46+N8SKkgE2ZYLY3uoJsGdr8NYNdzwHAnzR55BlbJYizpWYUc6U00FpiWe0pg77YBjKycoTxXomHIC6tRqy6XAEtiu1UhtimhdEhIdaDgLvlAhoDEbC2/wg/AruaA4dgo8yYapeZJILAS9DtJLIlsUb1kGP1Mq0Lb9pCmaNjtVbDRfySzXCjtEj1b1df3JzA8DGAdSpasPimqyHFAni4eQ8GQYLgVqRJUKV01n00rIw+iE0c6pTfx0abOWLQfAxhxNLDjWsliz1YUjXEAhuviPqSRnIgmsHAW/VEQgRZhv1RBw2xHayDHtYYGxvTIGEuDC8ywYce2UTJcwkVWekfNqtmsAODgI3pWVfeRglXUsAUM61y9JDSmr0NpJd0co8CxaQTjtWaj0cTZhNHK0bcLsLvnGSX3jB5IQln9qFrVk90MOIKUpTft4lHwNEUBw124mhVV8Fk/qOJToMdVxnmpSpdcdtBclZcv/DCjOMDuuMJJZMM7wH0TKN0pdQDXZpjAxAyk2Svh4YBIEkbf2qRIX6YvK9ddD9g2Pf2YBcz8fiaB2IOFxGrdOtDNijQw4oecqlROCjquQLQ8XeGmrJGkdgEW3t3hFyaY5L/MiCXFtnGtZM2CiOqkT7LNehcZ/8xkinNa1VMVDQaZaa/X0yHM1Cn4X7KfEc4qxCurFwx3Nf1wkMS9ubPY4Gua5sbShVfqJ3559Y1eMurhwr1F6R3chIy6P2m1cuo+qSJOqYfxVks4VA13I7O/v4/ZpcD/9oGlK2UP851OrqxQtj2vlCedTqG8pDvGO7NZx6G+0gMwVY/yy4oJxB7Jh5m1wZJ9DQ2cUBNF9oBbyYqYmlcWF/0poBH0YTkxN2BVt8ddH5iRcX23cGJyNfE6wwsT/zDA6ixNlbl8aebs6YF1SU7f3JrB8DO2TCwBRtJRzS3h7/KdqVP3B14XWJ3MGllumLlIC895o2lvs0kiOYTEOmx8SqHjpOosXigUqKdPFBrpdIMcSYC/Ub1PS9em3dfl8qjb/VMxz08rSrrA8HMBJsaqR5RU2dmqT2+xfH3rBuzFV3LqW1SVUaTvalQGz1ejiMJs9OZNt9t/U5sYNl5Mnb2x5NQ0/PDTX6lw6g/4nzNs4jLw1JYxTirKQ39arXbPZqjeqAZPNIlpHXDV2Rn65+wNuiRR7nSrlcq032nyAwuLgDGRZvaBcf++m1PgH9017MUr42RUlXE0yRq3TZNntmx+2/Bbs5Tbmqy2kNcllugfzajHCx/CT1WVhEfRvmoerGFHLD2jPLGOFkqjj2WDQ35EtxYODoWZOeBVFH5gliFQxsyUm1WualZ8zQFj9NFWlTFtkF/XWAhortGSzP2eVNrPh4kekRdYFKnYYdIApjWY0Stu5K0tYMxSBAAsTh2gk2euwMiuCwVtSt/RVvHV+9OxeudPdhrYKjCDXTj5mEZeklG9Y4Xe1yywZNJAdASIcQJDOTMTmJZj3COoMS7ANLJYCP1LTzG58kL1YfnyI6MtnyJMxVe3kHauDyuPWbfk6w5dYIbXRxjfY/r5VpErAtbLl4RWHT/wVCXA9Nd1KI8dw4bZgcFEWUw1gJHgW+8/nM5Gj5V+YQGw7iMWLdRAIdnBbDx+6Oq0++auYYJRpWrKz1ZVNcRyMEkvrEC0X/rCrH76FXbkg3FaIz3SyotI5lcjYMVDUUxl9nFM2UphYEeHJSTmKDkHrJIVhTIBhpOs0VqzkNe0eAHVOzkCe0jjgiJggGCzi2Vwfr7BZLPdgYULrJrYylWxmiwuCk40H3sMbdaUdYnLbmUPLRNGgO0jBdyvYhUjwLK2RjLAkLGtlUIEmBbqYRr0gzsCq5l9r4GBzXtk7rxKdfp5o6bxQhVfhiFaVnZeiHeZO3wyFoNEgCkrkoy9YDkVlttKAQun0BR/cZ8A+7eKxAyQWGDQ3vYaBjBsv6tsDsxZw5ppKKDH4pmmg1w6EWKFA9jI6WEl5HpNE2SoW1qnr9kGWAv6b9+J10rN51E1wTSw8CHyaTIYWLGKxQwpGWAVAX7qNwgwzKYGG9MoI2kuAHaE7wpsXJw8dfW0mfcILLxvel+27lTpmP6Jy0oQTWFdOLNb/8NYAGiOkXTBJgMMFxK1UswouQDYv1GKTCv3EDCsLTCR2JjCMTeZ7CWWjpJoFDVcGr2meARm9MnP1rI9aLxwgT4fMFhzyo6z31GpsNn9qKJzakcZd2B5R2D6Pipj6WZ1BAzNEyUTGBiS5HJgRwr03MxeUVW8AcOZX3vNeb9AzyNwLP/DiyUtebu7Y+4iQO1aJFEFrgww7JQJPBqmZxWkYmUaWI4fGPLsNWVk9Ara/HEAQ1bMXLYno1Jg+5YMPOslgSljPfePu+am+tYaZnpbV9aGoaHOMPrjFhJno68rWg6edXaAgClIV06B+Y4/Vo70JcBed5CQSct4eUb8A8pz5QEmqv9pGi+0bkaf2bPifCtyNaXGuBj/Rfx0ausKZrkkM0qiKaGK4Vbsp6iK/XlgIbQSX68iYFivutCriCvlxyXAagVNo9PUmjJBbiQVG/EAC4f/exf3RhQ4MwslPQGDP1qf6lFG2YRoXsZu9cH4YUhNzjI8fhgAFlLgT4O7ZAJlUtH0ESnfXAhsLneYR9bwd6tP8gGDBbtozTH8pdbaVSDUmJhu8JHhg1EKxmzpagITU4fIWU+GRQJMTbEqNgfMrKQGEHDJpo5yYyywLNaohE3DNDhKodnzBOrbR5bZ5wMWDg928ZKsSs5xIYWHfSu0ZgdHS0nDYovU5AmTqsfA/ierqqeo8ilaz5BY8mjyB5KWs9GHz6foJjCSeUjWJ+lyuU8Da51i0TCwETGNEy0+0l+PG+VmDin2o6UjvMBu0Jrj4tx2At6BQWSvYX8ZGRbM2jbYls3HA+PRkU6Gq2rWnq3Qjf1oCLCYBSz/YAILNYlWJ4vFYpIGZkgizmQrug0YfBtnM0lrXmCZrvOGFasAg/reJUVLYWZ2nfYpwnP5sO58PswOTIibwEK4dgfbJYV1aezAknEW2LSRpnMGI8oI8QITs0eb3N0plO6YLhS1V5FtuogBdjRzyLgWbcBweWsRAdNaFrBQs0YT0O0alo8zGVcwKlrDObvShhcYcF83u3+YwYteHh9hFSyc6Vf0Hohk9IPpqGTm9KsHlkyNbchU+AnEgImHCjiKNaLRB8cqM+JUpTvdAz2ZLFamZ+MGLK2mblPVtFmF+lwHBv+xWoRB1EGd3dKKG1hYdNzxdlVgpipZ++447HqeyapwLlvNqub+bMArzFpibqkVhkchp4SiKIZGFOCcgeVUNdJNEHcraVw8VlAsSaM5EkvicHFlutxIxMtp2zPwA1s6z+d5D0RjnoPaZpNru7XF8hTLvx361Iaa5HWXTXMHRGubIv49UbbGy0m8tWpho1bcx5XZY9N9V1If8PIIbGGzPAGzeNEFjtI6b+3a3nYMnpvmfJvV9qK+tM6PyO/WULAtbl/hvXGOt/EAzLrTHrWv8lodcpvbfazQPKcNg1fZT1+keEm824Y9N69VgDltGcz9xgbLUNH6FZFulnyhn3itAgxIyK5knMCol2gx+5y7bw3vF14rAptTMr63zlCvULmM0LzWKDnc9nZFKzeUbScHMOYlPecMr+OVW7H97Z1Wb2mYjhvcgdGvtGNfA8W3PbBPeK0OjH6VnSsw2xsATxhe7b1F3+BDXt6And/fMS8C5n37H4NLuGkHmJcHYMLNQJZlyfaSVhEzWwzM/npJ4YLZfiBovDwAu8Hv0ZTb57YhDb7CNAETlK/MPRtkGQBL6rCojT0XUqdwgbsFjJcHYEYmWZJP5l7QHRPV1l/9/z0ZHiMZnly8+6uV2U/ZThNit7ZX5A6Cxosf2CUV90kXoh0ZrKhPCUa9KvjP/OIWIXYRsb2E+Xj19xj7emtlKMxSUzkyj8xF5nEBf9UjJEp8vXk3kkuJfdjI1aUHZMLelR2XtE5Cx+/bw0MZsMQisjy8j3E9shC7G8r2lapy+yaIvDwAO5dtxICOtG/vwsLy5xbC57ftuUsj8nB18+X/V1zgJ7+zdyqkZpHh9U3MGZogxG7eDSNzygU79PuA5AvXAAZGwuG8pkA9k9sfrt5BarQAVlfHbcn5iuGcYxIUXt5CI9srzRloIAgYfBieIBl+GOAjjifL7btAzA9tABiQa2nxPgMLN19jcMkXa9B6dl6egQmxOf/Ai8iRW76R1a+8VkjvAJdqUWdzEdBNr9YxXn7gtVI+DDjtDo6CO672xXra5QdeKyYQhfD90JOaAeU6vlsXlx94rZHTj10PHJ0GJ1rS4HptWv7gtU6KWhAur4eSi6KBv0eO3126hAPB4eX5xeh2aOGbi2E7An0uGzeYRZQjL4cXN+GNbNvhE17MZOGKzITw5d317fGgTTGT2oPj2+u7S7dIk1/8wot+Tfk6AsEI5rJtWKy6MVRIfMMrtAEdM8R6hYC9undt8ROvte2YKU8HzF+8NqZjTwbMb7w2ReypgPmP14Z65RMB8yOvzejY0wDzJy/gXayvY08CzKe8QpvQsacA5l9eG9CxJwDmY16hNXUMTnxYwNDHH53XijoGwOzdgGDy5Hhghd6D45Pb6/ubvfUCJJ/zCnnXMUGI3V0MBzBbweYrUMmTLANwF/cLZi1/BF7edEwQz68GDomduSRP+/Z+lVR+AHiF+HVMiL0ftjmz1CiJ+N5ryjUYvPh0TAjfDSPepkEkWTq+95JKDAivEIeOCeL1CpNGaNqIf5YtOLzc4kph79ajclEiS/PlnoHntVTHAC6HYhwvyBwqZIPOa5mOXQMlWVNk6crNTAaN12Jie5d7G5BLl8ApeLw2mOdfQYLIa3N5/v8vvJ5Px4LK67l0LLi82BWhWxO/8/o/LWomZRUWvv4AAAAASUVORK5CYII='
    },
    {
        id: 5,
        title: 'Ética',
        series: '1° Ano',
        percentage_completed: 40,
        img: 'data:image/jpeg;base64,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'
    },
    {
        id: 6,
        title: 'Interação humano computador',
        series: '2° Ano',
        percentage_completed: 60,
        img: 'data:image/png;base64,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'
    },
]

const atividades = []

function Home() {
    // const [courses, setCourses] = useState([])

    return (
    <>
        <NavBar/>
        <div className={styles.full_view}>
            <Card className={styles.componentes_curriculares}>
                <CardHeader title="Componentes curriculares" className={styles.CardHeader} />
                <div className={styles.content}>
                    {cursosMocados.length > 0 &&
                    cursosMocados.map((data) => (
                        <MaterialCard
                        id={data.id}
                        title={data.title}
                        series={data.series}
                        percentage_completed={data.percentage_completed}
                        key={data.id}
                        img={data.img}
                        />
                    ))}
                    {cursosMocados.length === 0 && (
                        <div className={styles.not_found_courses}>
                           <h1>Nenhum componente curricular foi encontrado</h1>
                           <CircularProgress color='warning'/>
                        </div>
                    )}
                </div>
            </Card>
            <Card className={styles.atividades_proximas}>
                <CardHeader title="Atividades proximas" className={styles.CardHeader} />
                {atividades.length > 0 &&
                    atividades.map((data) => (
                        <div>Atividade</div>
                    ))}
                    {atividades.length === 0 && (
                        <div className={styles.not_found_actividades}>
                           <h4>Nenhuma atividade foi encontrada </h4>
                           <br/>
                           <CircularProgress color='warning'/>
                        </div>
                    )}
            </Card>
        </div>
    </>  
    );
}

export default Home