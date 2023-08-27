package customize

import (
	"custom-go/pkg/plugins"
	"fmt"

	"log"
	"time"

	"github.com/graphql-go/graphql"
)

type Feed struct {
	ID string `graphql:"id"`
}

var FeedType = graphql.NewObject(graphql.ObjectConfig{
	Name: "FeedType",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.ID,
		},
	},
})
var RootSubscription = graphql.NewObject(graphql.ObjectConfig{
	Name: "subscription",
	Fields: graphql.Fields{
		"feed": &graphql.Field{
			Type: FeedType,
			Resolve: func(p graphql.ResolveParams) (interface{}, error) {
				return p.Source, nil
			},
			Subscribe: func(p graphql.ResolveParams) (interface{}, error) {
				c := make(chan interface{})

				go func() {
					var i int

					for {
						i++

						feed := Feed{ID: fmt.Sprintf("%d", i)}

						select {
						case <-p.Context.Done():
							log.Println("[RootSubscription] [Subscribe] subscription canceled")
							close(c)
							return
						default:
							c <- feed
						}

						time.Sleep(250 * time.Millisecond)

						if i == 21 {
							close(c)
							return
						}
					}
				}()

				return c, nil
			},
		},
	},
})
var StatisticsSchema, _ = graphql.NewSchema(graphql.SchemaConfig{
	Query: graphql.NewObject(graphql.ObjectConfig{
		Name: "query",
		Fields: graphql.Fields{
			"GetMonthlySales": &graphql.Field{
				Type: graphql.String,
				Resolve: func(p graphql.ResolveParams) (res interface{}, err error) {
					_, _, err = plugins.ResolveArgs[any](p)
					if err != nil {
						return
					}
					return "ok", nil
				},
			},
		},
	}),
	Subscription: RootSubscription,
})

func init() {
	plugins.RegisterGraphql(&StatisticsSchema)
}
