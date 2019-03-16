<template>
    <div class="article-b">
        <comment></comment>
        <div id="wrapper" v-loading="uploadLoading">
					<div id="main">
							<article class="post">
								<header>
									<div class="title">
										<h2><a href="#">{{title}}</a></h2>
										<p class="smalll">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Day Day Up : Good Good Study</p>
									</div>
									<div class="meta">
										<time class="published">{{create_time}}</time>
										<span class="name author">Eden</span>
									</div>
								</header>
								<p class="neirong" v-html="content">{{content}}</p>
								<footer>
									<ul class="actions">
										<li><a href="#" class="button big">Like It</a></li>
									</ul>
								</footer>
							</article>
					</div>
		</div>
    </div>
</template>
<script>
import comment from './comment'
export default {
    name: 'details',
    data() {
        return {
            title:'',
            content:'',
			create_time:'',
			uploadLoading:false
        }
        },
        components:{
              comment
          },
        created(){
			// console.log(this.$route.params.id)
			this.uploadLoading = true
            this.$ajax.get(this.host+"/detail",{params:{id:this.$route.params.id}})
            .then((x)=>{
                // console.log(x.data[0].content)
                this.title = x.data[0].title
                this.content = x.data[0].content
				this.create_time = x.data[0].create_time
				this.uploadLoading = false
				document.documentElement.scrollTop = document.body.scrollTop = 0
            })
        },
        methods: {
        }
}
</script>
<style scoped>
    .smalll{
        font-size: 10px
    }
	.name{
		color: rgb(85, 85, 250);
	}
	.meta{
		margin-top: -75px
	}
	.title{
		margin-top: -70px
	}
    .article-b{
        background-image: url("../../static/img/20.jpg");
        min-height: 100vh;
		min-width: 950px;
    }
	#wrapper {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row-reverse;
		-webkit-flex-direction: row-reverse;
		-ms-flex-direction: row-reverse;
		flex-direction: row-reverse;
		-moz-transition: opacity 0.5s ease;
		-webkit-transition: opacity 0.5s ease;
		-ms-transition: opacity 0.5s ease;
		transition: opacity 0.5s ease;
		margin: 0 auto;
		max-width: 100%;
		opacity: 1;
		padding: 4.5em;
		width: 90em;
		min-height: 100vh
    }
    #main {
		-moz-flex-grow: 1;
		-webkit-flex-grow: 1;
		-ms-flex-grow: 1;
		flex-grow: 1;
		-ms-flex: 1;
		width: 100%;
    }
    .post {
		padding: 3em 3em 1em 3em ;
		background: #ffffff;
		border: solid 1.5px rgba(107, 69, 69, 0.3);
		margin: 0 0 3em 0;
		position: relative;
		min-height: 70vh;
    }
    .post > header .meta {
	    padding: 3.75em 3em 1.75em 3em ;
	    border-left: solid 1px rgba(160, 160, 160, 0.3);
	    min-width: 17em;
	    text-align: right;
	    width: 17em;
    }
	.post > header .meta > * {
		margin: 0 0 1em 0;
	}
	.post > header .meta > :last-child {
		margin-bottom: 0;
    }
    ul.posts article header .published {
						display: block;
						font-family: "Raleway", Helvetica, sans-serif;
						font-size: 0.6em;
						font-weight: 400;
						letter-spacing: 0.25em;
						margin: -0.625em 0 1.7em 0;
						text-transform: uppercase;
    }
    .mini-post header .published {
				display: block;
				font-family: "Raleway", Helvetica, sans-serif;
				font-size: 0.6em;
				font-weight: 400;
				letter-spacing: 0.25em;
				margin: -0.625em 0 1.7em 0;
				text-transform: uppercase;
	}
	.post > header .meta .published {
		color: #3c3b3b;
		display: block;
		font-family: "Raleway", Helvetica, sans-serif;
		font-size: 0.7em;
		font-weight: 800;
		letter-spacing: 0.25em;
		margin-top: 0.5em;
		text-transform: uppercase;
		white-space: nowrap;
    }   
    @media screen and (max-width: 480px) {
	    .post > header .meta {
	    	-moz-align-items: center;
	    	-webkit-align-items: center;
	    	-ms-align-items: center;
	    	align-items: center;
	    	-moz-flex-direction: column;
	    	-webkit-flex-direction: column;
	    	-ms-flex-direction: column;
	    	flex-direction: column;
	    }
		.post > header .meta > * {
			border-left: 0;
			margin: 1em 0 0 0;
			padding-left: 0;
		}

		.post > header .meta .author .name {
				display: none;
		}
		.post > .image.featured {
			margin-left: -1.5em;
			margin-top: calc(-1.5em - 1px);
			width: calc(100% + 3em);
		}
		.post > footer {
			-moz-align-items: stretch;
			-webkit-align-items: stretch;
			-ms-align-items: stretch;
			align-items: stretch;
			-moz-flex-direction: column-reverse;
			-webkit-flex-direction: column-reverse;
			-ms-flex-direction: column-reverse;
			flex-direction: column-reverse;
		}
		.post > footer .stats {
			text-align: center;
		}
		.post > footer .stats li {
			margin: 0 0 0 1.25em;
			padding: 0 0 0 1.25em;
		}

		}
		@media screen and (max-width: 980px) {
			.post {
				border-left: 0;
				border-right: 0;
				left: -3em;
				width: calc(100% + (3em * 2));
			}
			.post > header {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				padding: 3.75em 3em 1.25em 3em ;
				border-left: 0;
			}
			.post > header .title {
				-ms-flex: 0 1 auto;
				margin: 0 0 2em 0;
				padding: 0;
				text-align: center;
			}
			.post > header .meta {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				display: -moz-flex;
				display: -webkit-flex;
				display: -ms-flex;
				display: flex;
				-moz-justify-content: center;
				-webkit-justify-content: center;
				-ms-justify-content: center;
				justify-content: center;
				border-left: 0;
				margin: 0 0 2em 0;
				padding-top: 0;
				padding: 0;
				text-align: left;
				width: 100%;
			}
			.post > header .meta > * {
				border-left: solid 1px rgba(160, 160, 160, 0.3);
				margin-left: 2em;
				padding-left: 2em;
			}
			.post > header .meta > :first-child {
				border-left: 0;
				margin-left: 0;
				padding-left: 0;
			}
			.post > header .meta .published {
				margin-bottom: 0;
				margin-top: 0;
			}

            .post > header .meta .author {
            	-moz-flex-direction: row-reverse;
            	-webkit-flex-direction: row-reverse;
            	-ms-flex-direction: row-reverse;
            	flex-direction: row-reverse;
            	margin-bottom: 0;
            }           
            .post > header .meta .author .name {
            		margin: 0 0 0 1.5em;
            }           
            .post > header .meta .author img {
            	width: 3.5em;
            }
            }
            .post > header .title {
                -moz-flex-grow: 1;
                -webkit-flex-grow: 1;
                -ms-flex-grow: 1;
                flex-grow: 1;
                -ms-flex: 1;
                padding: 3.75em 3em 3.3em 3em;
            }
            .post > header .title h2 {
                font-weight: 900;
                font-size: 1.5em;
            }
            .post > header .title > :last-child {
                margin-bottom: 0;
            }
            ul.posts article header .published {
				display: block;
				font-family: "Raleway", Helvetica, sans-serif;
				font-size: 0.6em;
				font-weight: 400;
				letter-spacing: 0.25em;
				margin: -0.625em 0 1.7em 0;
				text-transform: uppercase;
			}
    @media screen and (max-width: 736px) {
			.post {
				padding: 1.5em 1.5em 0.1em 1.5em ;
				left: -1.5em;
				margin: 0 0 2em 0;
				width: calc(100% + (1.5em * 2));
			}
			.post > header {
					padding: 3em 1.5em 0.5em 1.5em ;
					left: -1.5em;
					margin: -1.5em 0 1.5em 0;
					width: calc(100% + 3em);
			}

			.post > header .title h2 {
						font-size: 1.1em;
			}

		}
    @media screen and (max-width: 480px) {

			.post > header .meta {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
			}
			.post > header .meta > * {
				border-left: 0;
				margin: 1em 0 0 0;
				padding-left: 0;
			}
			.post > header .meta .author .name {
				display: none;
			}
			.post > .image.featured {
				margin-left: -1.5em;
				margin-top: calc(-1.5em - 1px);
				width: calc(100% + 3em);
			}
			.post > footer {
				-moz-align-items: stretch;
				-webkit-align-items: stretch;
				-ms-align-items: stretch;
				align-items: stretch;
				-moz-flex-direction: column-reverse;
				-webkit-flex-direction: column-reverse;
				-ms-flex-direction: column-reverse;
				flex-direction: column-reverse;
			}
			.post > footer .stats {
				text-align: center;
			}
			.post > footer .stats li {
				margin: 0 0 0 1.25em;
				padding: 0 0 0 1.25em;
			}
		}
    .author {
	    display: -moz-flex;
	    display: -webkit-flex;
	    display: -ms-flex;
	    display: flex;
	    -moz-flex-direction: row;
	    -webkit-flex-direction: row;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -moz-align-items: center;
	    -webkit-align-items: center;
	    -ms-align-items: center;
	    align-items: center;
	    -moz-justify-content: -moz-flex-end;
	    -webkit-justify-content: -webkit-flex-end;
	    -ms-justify-content: -ms-flex-end;
	    justify-content: flex-end;
	    border-bottom: 0;
	    font-family: "Raleway", Helvetica, sans-serif;
	    font-size: 0.6em;
	    font-weight: 400;
	    letter-spacing: 0.25em;
	    text-transform: uppercase;
	    white-space: nowrap;
    }
	.author .name {
		-moz-transition: border-bottom-color 0.2s ease;
		-webkit-transition: border-bottom-color 0.2s ease;
		-ms-transition: border-bottom-color 0.2s ease;
		transition: border-bottom-color 0.2s ease;
		border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
		display: block;
		margin: 0 1.5em 0 0;
	}
	.author img {
		border-radius: 100%;
		display: block;
		width: 4em;
	}
	.author:hover .name {
		border-bottom-color: transparent;
    }
    .mini-post header .author {
	    position: absolute;
	    right: 2em;
	    top: 2em;
    }
    .image.featured {
	display: block;
	margin: 0 0 3em 0;
	width: 100%;
    }
	.image.featured img {
		width: 100%;
	}
	@media screen and (max-width: 736px) {
		.image.featured {
			margin: 0 0 1.5em 0;
		}
    }
    .post > .image.featured {
	overflow: hidden;
    }
	.post > .image.featured img {
		-moz-transition: -moz-transform 0.2s ease-out;
		-webkit-transition: -webkit-transform 0.2s ease-out;
		-ms-transition: -ms-transform 0.2s ease-out;
		transition: transform 0.2s ease-out;
	}
	.post > .image.featured:hover img {
		-moz-transform: scale(1.05);
		-webkit-transform: scale(1.05);
		-ms-transform: scale(1.05);
		transform: scale(1.05);
    }
    ul.actions {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}
	ul.actions li {
		display: inline-block;
		padding: 0 1.5em 0 0;
		vertical-align: middle;
	}
	ul.actions li:last-child {
		padding-right: 0;
	}
	ul.actions.pagination .next {
		text-decoration: none;
    }
	ul.actions.pagination .next:after {
		content:"";
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		text-transform: none !important;
	}
	ul.actions.pagination .next:after {
		content: '\f054';
	}
	ul.actions.pagination .previous {
		text-decoration: none;
    }
	ul.actions.pagination .previous:before {
		content: "";
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-family: FontAwesome;
		font-style: normal;
		font-weight: normal;
		text-transform: none !important;
	}
	ul.actions.pagination .previous:before {
		content: '\f053';
    }
    @media screen and (max-width: 1280px) {
		ul.actions.pagination {
			text-align: center;
		}
        ul.actions.pagination .next, ul.actions.pagination .previous {
			min-width: 20em;
		}
	}
	@media screen and (max-width: 736px) {
		ul.actions.pagination .next, ul.actions.pagination .previous {
			min-width: 18em;
		}
	}
	ul.actions.small li {
	    padding: 0 1em 0 0;
	}

	ul.actions.vertical li {
		display: block;
		padding: 1.5em 0 0 0;
	}

		ul.actions.vertical li:first-child {
			padding-top: 0;
		}

		ul.actions.vertical li > * {
			margin-bottom: 0;
		}

	ul.actions.vertical.small li {
		padding: 1em 0 0 0;
	}

		ul.actions.vertical.small li:first-child {
			padding-top: 0;
		}

	ul.actions.fit {
		display: table;
		margin-left: -1em;
		padding: 0;
		table-layout: fixed;
		width: calc(100% + 1em);
	}

		ul.actions.fit li {
			display: table-cell;
			padding: 0 0 0 1em;
		}

			ul.actions.fit li > * {
				margin-bottom: 0;
			}

		ul.actions.fit.small {
			margin-left: -0.5em;
			width: calc(100% + 0.5em);
		}

			ul.actions.fit.small li {
				padding: 0 0 0 0.5em;
			}

	@media screen and (max-width: 480px) {

		ul.actions {
			margin: 0 0 2em 0;
		}

		ul.actions li {
			padding: 1em 0 0 0;
			display: block;
			text-align: center;
			width: 100%;
		}

		ul.actions li:first-child {
			padding-top: 0;
		}

		ul.actions li > * {
			width: 100%;
			margin: 0 !important;
		}

		ul.actions.small li {
			padding: 0.5em 0 0 0;
		}

		ul.actions.small li:first-child {
			padding-top: 0;
		}

    }
    .post > footer .actions {
		-moz-flex-grow: 1;
		-webkit-flex-grow: 1;
		-ms-flex-grow: 1;
		flex-grow: 1;
	}
</style>
