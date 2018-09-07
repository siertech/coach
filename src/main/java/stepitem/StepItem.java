package stepitem;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import step.Step;
import stepdescriptor.StepDescriptor;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "stepitem")
@Getter @Setter
public  class StepItem extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String ok;
	
	@ManyToOne
	@JoinColumn(name="step_item_step_id")
    @JsonView(Views.Public.class)
	private Step step;
	
	@ManyToOne
	@JoinColumn(name="step_item_step_descriptor_id")
    @JsonView(Views.Public.class)
	private StepDescriptor stepDescriptor;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String content;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;
	

}
